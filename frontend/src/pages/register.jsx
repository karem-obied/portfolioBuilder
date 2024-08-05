import React, { useEffect } from "react";
import { useState } from "react";
import RegisterForm from "../components/Register";
import { FaUser } from "react-icons/fa";
import "../styles/register.css";
function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    work: "",
  });
  const changeData = (Data) => {
    setData(Data);
  };

  return (
    <div className="register-page">
      <div className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Make A New Account and Start Using Portfolio Builder</p>
      </div>
      <RegisterForm onchange={changeData} />
    </div>
  );
}

export default Register;
