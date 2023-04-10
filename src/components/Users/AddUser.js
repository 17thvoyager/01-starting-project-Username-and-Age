import React,{useState} from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal.js';
import './AddUser.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState('');

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge === 0){
      setError({
        title:"Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      });
    }
    if(enteredAge < 1 ){
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(> 0),"
      })
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorConfirm={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUser;
