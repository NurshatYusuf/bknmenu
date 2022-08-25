import React, { useReducer, useContext } from "react";
import axios from "axios";

export const usersContext = React.createContext();
export const useAuth = () => useContext(usersContext);
const INIT_STATE = {
  users: [],
  oneUser: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_ONE_USER":
      return { ...state, oneUser: action.payload };
    default:
      return state;
  }
}
const UsersContextProvider = ({ children }) => {
  const API = " http://localhost:8000/users";

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getUsers() {
    let res = await axios(API);
    dispatch({
      type: "GET_USERS",
      payload: res.data,
    });
  }

  async function addUser(newUser) {
    await axios.post(API, newUser);
    getUsers();
    dispatch({
      type: "GET_ONE_USER",
      payload: newUser,
    });
  }
  async function deleteUser(id) {
    await axios.delete(`${API}/${id}`);
    getUsers();
  }
  async function getOneUser(userName) {
    let { data } = await axios.get(API);
    let obj = data.find((item) => item.userName === userName);
    console.log(obj);
    dispatch({
      type: "GET_ONE_USER",
      payload: obj,
    });
  }

  // start
  async function loginUser2(userName, password) {
    let { data } = await axios.get(API);
    let obj = data.find((item) => item.userName === userName);
    if (!obj) {
      alert("Users with this name dosn`t exist");
      return;
    }
    if (obj.password !== password) {
      alert("Wrong password");
      return;
    }
    obj.isLogin = true;
    await axios.patch(`${API}/${obj.id}`, obj);
    console.log(obj);
  }

  async function logOut(userName) {
    let { data } = await axios.get(API);
    let obj = data.find((item) => (item.isLogin = true));

    obj.isLogin = false;
    await axios.patch(`${API}/${obj.id}`, obj);
  }

  // end

  async function updateUser(id, editedUser) {
    await axios.patch(`${API}/${id}`, editedUser);
    getUsers();
  }
  async function checkUniqueUserName(checkName) {
    let users = [];
    users.push(await axios.get(API));
    return users[0].data.some((item) => item.userName === checkName);
  }
  function checkUserPassword(userName, pass) {
    getOneUser(userName);
    let user = state.oneUser;

    return user.password === pass;
  }

  return (
    <usersContext.Provider
      value={{
        users: state.users,
        oneUser: state.oneUser,

        getOneUser,
        getUsers,
        addUser,
        deleteUser,
        updateUser,
        checkUniqueUserName,
        checkUserPassword,
        loginUser2,
        logOut,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UsersContextProvider;
