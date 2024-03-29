import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../mixins.scss";

const AuthButton = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);

  const handleClick = () => {
    if (user) {
      setUser((prev) => !prev);
      navigate("/login");
    } else {
      setUser((prev) => !prev);
      navigate("/");
    }
  };

  return (
    <button className="auth-btn" onClick={() => handleClick()}>
      {!user ? "Login" : "Logout"}
    </button>
  );
};

export default AuthButton;
