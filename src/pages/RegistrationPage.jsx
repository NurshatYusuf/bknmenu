import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../contexts/userContext";

const RegistrationPage = () => {
  const { addUser, checkUniqueUserName } = useAuth();
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  async function handleValues() {
    if (
      !userName.trim() ||
      !name.trim() ||
      !lastName.trim() ||
      !confirm.trim() ||
      !password.trim()
    ) {
      alert("Some inputs are empty");
      return;
    }
    if (password !== confirm) {
      alert("Password do not match");
      return;
    }
    let newUser = {
      userName,
      name,
      lastName,
      password,
      isLogin,
    };
    //func

    if (await checkUniqueUserName(newUser.userName)) {
      alert("UserName already exists");
      return;
    } else {
      addUser(newUser);
      setName("");
      setLastName("");
      setPassword("");
      setConfirm("");
      setUserName("");

      alert("successfull registration");
    }
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
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="LastName"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="text"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Confirm Password"
      />

      <button onClick={() => handleValues()}>Register</button>
    </div>
  );
};

export default RegistrationPage;
