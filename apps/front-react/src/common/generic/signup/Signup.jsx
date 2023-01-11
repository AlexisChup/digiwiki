import React, { useState } from "react";
import { AXIOS } from "../../../app/axios-http";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Signup() {
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
    AXIOS.post("/user/register", formLogin)
      .then((response) => {
        toast.update(id, {
          render: "Signup successfully !",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
        //get token from response
        const token = response.data.token;

        dispatch(login(token));

        //redirect user to home page
        navigate("/");
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
    <div>
      <Row className="justify-content-center">
        <div>
          <h2>Signup</h2>
        </div>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="register-email">Email address</Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              id="register-email"
              aria-describedby="register-email-help"
              placeholder="Enter email"
              onChange={(e) => handleFormLogin("email", e.target.value)}
              value={formLogin.email}
            />
            <small id="register-email-help" className="form-text text-muted">
              user@gmail.com
            </small>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="register-password">Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="on"
              className="form-control"
              id="register-password"
              aria-describedby="register-password-help"
              placeholder="Password"
              onChange={(e) => handleFormLogin("password", e.target.value)}
              value={formLogin.password}
            />
            <small id="register-password-help" className="form-text text-muted">
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
      </Row>
    </div>
  );
}
