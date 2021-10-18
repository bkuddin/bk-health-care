import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div className="my-5">
      <button className="bk-btn" onClick={signInUsingGoogle}>
        Google Sign-in
      </button>
    </div>
  );
};

export default Login;
