import React,{useState} from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import './AddUser.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge === 0){
      return;
    }
    if(enteredAge < 1 ){
      return console.log("You are not qualified");
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input
            id="username"
            className="input"
            type="text"
            placeholder=" "
            value={enteredUsername}
            onChange={userNameChangeHandler}
          />
          <div className="cut"></div>
          <label htmlFor="username" className="placeholder">
            Username
          </label>
        </div>
        <div className="input-container ic2">
          
          <input
            id="age"
            className="input"
            type="number"
            placeholder=" "
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <div className="cut"></div>
          <label htmlFor="age" className="placeholder">
            Age
          </label>
        </div>
        <Button type="submit">submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
