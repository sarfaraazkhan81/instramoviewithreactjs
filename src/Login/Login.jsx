import React from "react";
import { useState } from "react";
import "./Login.css";

function Login() {
  const initialValues = { username: "", mobile: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFromErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setFromErrors(validate(formValues));
  };

  //   const validate = () => {
  //     const errors = {};
  //     const regex = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  //     if (!value.username) {
  //       errors.username = "username is required";
  //     }
  //     if (!value.mobile) {
  //       errors.username = "username is required";
  //     }
  //     if (!value.password) {
  //       errors.username = "username is required";
  //     }
  //   };

  return (
    <div className="container">
      <form className="login" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>{JSON.stringify(formValues)}</h1>
        <div className="heading">
          <h1>Pls Login here</h1>
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="username"
            placeholder="user name"
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mobile"
            placeholder="enter mobile number"
            value={formValues.mobile}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="buttonContainer">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
