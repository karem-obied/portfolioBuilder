import { useState, useEffect } from "react";

function RegisterForm({ onchange }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    work: "",
  });

  return (
    <div className="register">
      <div className="context"></div>
      <form></form>
    </div>
  );
}

export default RegisterForm;
