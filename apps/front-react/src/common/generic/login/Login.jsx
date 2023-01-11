import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { login } from "../../../features/auth/authSlice";
import { AXIOS } from "../../../app/axios-http";

export default function Login() {
  const initialFormLogin = {
    email: "",
    password: "",
  };

  let [isRequesting, setRequesting] = useState(false);
  let [formLogin, setFormLogin] = useState(initialFormLogin);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = toast.loading("Please wait...");
    setRequesting(true);
    AXIOS.post("/login_check", formLogin)
      .then((response) => {
        toast.update(id, {
          render: "Login successfully !",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
        //get token from response
        const token = response.data.token;

        dispatch(login(token));

        //redirect user to dashboard page
        navigate("/dashboard");
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
      .finally(() => setRequesting(false));
  };

  const handleFormLogin = (key, value) => {
    setFormLogin({ ...formLogin, [key]: value });
  };

  const isFormValid = () => {
    let isFormValid = true;

    isFormValid &= formLogin.email.length > 0;
    isFormValid &= formLogin.password.length > 0;

    return isFormValid;
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 mx-auto col-6-resized-md">
          <h1>Connexion</h1>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="login-email">Adresse mail</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                className="form-control"
                id="login-email"
                aria-describedby="login-email-help"
                placeholder="Enter email"
                onChange={(e) => handleFormLogin("email", e.target.value)}
                value={formLogin.email}
              />
              <small
                id="login-email-help"
                className="form-text text-muted mt-0"
              >
                user@gmail.com
              </small>
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label htmlFor="login-password">Mot de passe</Form.Label>
              <Form.Control
                size="sm"
                type="password"
                autoComplete="on"
                className="form-control"
                id="login-password"
                aria-describedby="login-password-help"
                placeholder="Password"
                onChange={(e) => handleFormLogin("password", e.target.value)}
                value={formLogin.password}
              />
              <small
                id="login-password-help"
                className="form-text text-muted mt-0"
              >
                user
              </small>
            </Form.Group>
            <Button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              disabled={isRequesting || !isFormValid()}
              size="sm"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
