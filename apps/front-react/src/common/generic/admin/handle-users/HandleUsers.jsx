import React, { useEffect, useState } from "react";
import { FaPen, FaPlus, FaUser } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { AXIOS } from "../../../../app/axios-http";
import { toast } from "react-toastify";
import Spinner from "../../spinner/Spinner";
import HandleUsersModal from "./handle-users-modal/HandleUsersModal";

export default function HandleUsers() {
  let [show, setShow] = useState(false);

  const initialStateUsers = [];
  let [users, setUsers] = useState(initialStateUsers);

  let [isRequesting, setIsRequesting] = useState(false);

  const emptyUser = {
    userIdentifier: "",
    email: "",
    password: "",
    roles: ["ROLE_USER"],
  };

  let [formUser, setFormUser] = useState({
    type: "ADD",
    user: emptyUser,
  });

  const handleFormUserRoleAdmin = (key, value) => {
    let copyRoles = [...formUser.user.roles];
    if (value) {
      copyRoles.push(key);
    } else {
      // Removing the specified element by value from the array
      for (let i = 0; i < copyRoles.length; i++) {
        if (copyRoles[i] === key) {
          copyRoles.splice(i, 1);
        }
      }
    }

    setFormUser({
      ...formUser,
      user: { ...formUser.user, roles: copyRoles },
    });
  };

  const handleFormUser = (key, value) => {
    setFormUser({
      ...formUser,
      user: { ...formUser.user, [key]: value },
    });
  };

  const handleClose = (isConfirmed) => {
    if (isConfirmed) {
      let payload = { ...formUser.user };
      if (formUser.type === "EDIT") {
        payload = {
          ...payload,
          isPasswordChanged: formUser.user.passwordEdited.length > 0,
        };

        if (payload.isPasswordChanged) {
          payload.password = formUser.user.passwordEdited;
        }
      }

      const id = toast.loading("Please wait...");

      const endpoint = formUser.type === "ADD" ? "create" : "edit";
      const urlApi = `/admin/user/${endpoint}`;

      AXIOS.post(urlApi, payload)
        .then((response) => {
          fetchAllUsers();
          toast.update(id, {
            render: formUser.type + " successfully !",
            type: "success",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          setShow(false);
        })
        .catch((err) => {
          toast.update(id, {
            render: err.response.data.message,
            type: "error",
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          console.log(err);
        })
        .finally(() => {});
    } else {
      setShow(false);
    }
  };

  const handleShow = (user) => {
    if (user) {
      setFormUser({ type: "EDIT", user: { ...user, passwordEdited: "" } });
    } else {
      setFormUser({ type: "ADD", user: emptyUser });
    }

    setShow(true);
  };

  const fetchAllUsers = () => {
    setIsRequesting(true);
    AXIOS.get("/admin/user/all")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsRequesting(false));
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <h2>Handle Users</h2>
        </div>
        <div>
          <Button size="sm" variant="success" onClick={() => handleShow(false)}>
            <FaPlus />
            <FaUser />
          </Button>
        </div>
      </div>
      {isRequesting ? (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">UserIdentifier</th>
                <th scope="col">Roles</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={(index + 1) * 10}>
                  <th className="align-middle" scope="row">
                    {user.id}
                  </th>
                  <td className="align-middle">{user.email}</td>
                  <td className="align-middle">{user.userIdentifier}</td>
                  <td className="align-middle">
                    {user.roles.map((role, indexRole) => {
                      return (
                        <div key={(index + 1) * 10 + indexRole + 1}>{role}</div>
                      );
                    })}
                  </td>
                  <td className="align-middle">
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => handleShow(user)}
                    >
                      <FaPen />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <HandleUsersModal
        show={show}
        handleClose={handleClose}
        handleFormUser={handleFormUser}
        formUser={formUser}
        handleFormUserRoleAdmin={handleFormUserRoleAdmin}
      />
    </div>
  );
}
