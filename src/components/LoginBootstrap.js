import {
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.init";

const auth = getAuth(app);

const LoginBootstrap = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please enter email address");
      return;
    }
    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Password reset email sent. Please check your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-50 m-auto">
      <h3 className="text-success">Please Login!!!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onBlur={handleEmailBlur}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Button variant="btn btn-primary" type="submit">
          Log In
        </Button>{" "}
      </Form>
      {success && (
        <p>
          <small className="text-success">Successfully Login</small>
        </p>
      )}
      <p>
        <small>
          New to this Website? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p>
        <small>
          {" "}
          Forget Password?{" "}
          <Button
            type="button"
            className="btn btn-link"
            onClick={handleForgetPassword}
          >
            Please Reset
          </Button>{" "}
          .
        </small>
      </p>
    </div>
  );
};

export default LoginBootstrap;
