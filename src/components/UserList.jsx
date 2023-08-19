import React from "react";
import { useState, useEffect } from "react";
// COMPONENTS
import SingleUser from "./SingleUser";

import { useDispatch } from "react-redux";
import { setUsers } from "../redux/userSlice"; // Import your setUsers action

// https://randomuser.me/api/?results=5

const UserList = () => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);

  const fetchUsers = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        setUserList(data.results);
        dispatch(setUsers(data.results)); // Dispatch the setUsers action to store users
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [1]);

  return (
    <div className="user-list">
      <ul>
        {userList?.map((user, idx) => (
          <li>
            {" "}
            <SingleUser user={user} key={idx} userId={idx} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
