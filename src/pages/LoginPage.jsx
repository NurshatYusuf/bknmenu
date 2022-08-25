import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />

      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => loginUser()}>Login</button>

      {/* {isLogin.isLogin === true ? ( */}
      <button onClick={() => logOut(userName)}> LogOUT</button>
      {/* ) : (
        <></>
      )}
      {isLogin.isLogin == true ? <h5>You are logged in</h5> : <></>} */}
    </div>
  );
};

export default LoginPage;
