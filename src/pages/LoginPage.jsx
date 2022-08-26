import React, { useState } from "react";
import "../styles/LoginPage.css";
import { useAuth } from "../contexts/userContext";

const LoginPage = () => {
  const { logOut, loginUser2 } = useAuth();

  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  async function loginUser() {
    loginUser2(userName, pass);
    setUserName("");
    setPass("");
  }

  return (
    <div className="log-container">
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
        className="log__inp"
      />

      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        className="log__inp"
      />
      <div>
        <button className="log__btn" onClick={() => loginUser()}>
          Login
        </button>
      </div>

      {/* {isLogin.isLogin === true ? ( */}
      {/* ) : (
        <></>
      )}
      {isLogin.isLogin == true ? <h5>You are logged in</h5> : <></>} */}
    </div>
  );
};

export default LoginPage;
