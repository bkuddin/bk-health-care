import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

// Only for Email Sign In

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import initAuth from "../../Firebase/firebase.init";

initAuth();

// Only for Email Sign In

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error State for validation
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  //   Handle Email

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //   Handle Name changed

  const handleNameChanged = (e) => {
    setName(e.target.value);
  };

  //   Handle Password

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //   Toggle Login
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  //   Handle Registration
  const handleRegistration = (e) => {
    console.log(email, password);
    e.preventDefault();
    // password Length validation
    if (password.length < 6) {
      setError("Passwords must be at least 6 characters in length");
      return;
    }
    // password uppercase validation

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Ensure string has two uppercase letters.");
      return;
    }
    isLogin ? loginProcess(email, password) : registerNewUser(email, password);
  };

  const loginProcess = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   Verify Email

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  //   Update Profile
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  //   handle Reset Password

  const handleResetPass = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };

  return (
    <div>
      <div className="form-style my-5">
        <Form onSubmit={handleRegistration}>
          <h3 className="my-2 fs-1">
            {isLogin ? "Login Now" : "Register Now"}
          </h3>
          {!isLogin && (
            <Col sm={12} className="my-1">
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                onBlur={handleNameChanged}
                id="inlineFormInputName"
                placeholder="Jane Doe"
              />
            </Col>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="" style={{ color: "darkgray" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={toggleLogin}
              type="checkbox"
              label="Already registered?"
            />
          </Form.Group>
          <div className="mb-3 text-warning">{error}</div>
          <Button variant="light" type="submit">
            {isLogin ? "Login" : "Register"}
          </Button>

          <Button
            className="ms-3"
            onClick={handleResetPass}
            variant="light"
            type="submit"
          >
            Reset Password
          </Button>
        </Form>
      </div>
      {/* Sign in with Google */}
      <div className="my-5">
        <button className="bk-btn" onClick={signInUsingGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
