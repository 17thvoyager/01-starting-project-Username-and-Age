import React,{useState } from 'react';
import AddUser from './components/Users/AddUser.js';
import UsersList from './components/Users/UsersList.js';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList( (preveUsersList) => { 
      return ([...preveUsersList, {id: Math.random().toString(), name: uName, age: uAge}])
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList user={usersList} />
    </div>
  );
}

export default App;
