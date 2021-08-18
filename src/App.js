import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {

    console.log('name', uName);
    console.log('age', uAge);
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge}];
    });
  };
  console.log('state', usersList);
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
