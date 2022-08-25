import React, { useState } from "react";

import { useAuth } from "../contexts/userContext";

const LoginPage = () => {
  const { checkUniqueUserName, checkUserPassword, oneUser, updateUser } =
    useAuth();

  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const [isLogin, setIsLogin] = useState(false);
  console.log(oneUser);
  const changeIsLogin = () => {
    setIsLogin(!true);
  };

  async function loginUser() {
    let user = await checkUniqueUserName(userName);
    if (!user) {
      alert("user not found");
      return;
    }
    console.log(checkUserPassword(userName, pass));

    if (!checkUserPassword(userName, pass)) {
      alert("Password doesn't match this account");
      return;
    }
    oneUser.isLogin = true;
    console.log(oneUser);

    alert("login Successfull");
    changeIsLogin();
    updateUser(oneUser.id, oneUser);
    setUserName("");
    setPass("");
  }
  function logOut() {
    oneUser.isLogin = false;
    updateUser(oneUser.id, oneUser);
    console.log(oneUser);
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
      <button onClick={logOut}> LogOUT</button>
      {/* ) : (
        <></>
      )} */}
      {/* {oneUser.isLogin == true ? <h5>You are logged in</h5> : <></>} */}
    </div>
  );
};

export default LoginPage;
