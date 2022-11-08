import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Users.css";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default Users;
