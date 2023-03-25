import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, changeUsers] = useState([]);

  const onSubmitUser = (newUser) => {
    changeUsers((prev) => {
      console.log(...prev, newUser);
      return [...prev, newUser];
    });
  };

  return (
    <div>
      <AddUser onSubmitUser={onSubmitUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
