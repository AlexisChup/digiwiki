import React, { useState, useEffect } from "react";
import { AXIOS } from "../../../app/axios-http";
import Spinner from "../spinner/Spinner";

export default function Profile() {
  let [isRequesting, setIsRequesting] = useState(false);
  const initialStateProfil = {
    id: null,
    email: "",
    userIdentifier: "",
    roles: [],
  };

  let [profile, setProfile] = useState(initialStateProfil);

  useEffect(() => {
    setIsRequesting(true);
    AXIOS.get("/user/profile")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsRequesting(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <h2>Profile</h2>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="align-middle text-truncate" scope="row">
                  {profile.id}
                </th>
                <td className="align-middle text-truncate">{profile.email}</td>
                <td className="align-middle text-truncate">
                  {profile.userIdentifier}
                </td>
                <td className="align-middle text-truncate">
                  {profile.roles.map((role, indexRole) => {
                    return <div key={indexRole}>{role}</div>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
