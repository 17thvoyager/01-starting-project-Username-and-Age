import React,{useState,useRef} from 'react';
import Card from '../UI/Card.js';
import Button from '../UI/Button.js';
import ErrorModal from '../UI/ErrorModal.js';
import './AddUser.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState('');

  const addUserHandler = (event) => {

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    event.preventDefault ();
    if(enteredName.trim().length === 0 || enteredUserAge === 0){
      setError({
        title:"Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    }
    if(+enteredName < 1 ){
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(> 0)",
      })
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";


  };

 /* const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
*/

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
              //value={enteredUsername}
              //onChange={userNameChangeHandler}
              ref= {nameInputRef}
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
              //value={enteredAge}
              //onChange={ageChangeHandler}
              ref={ageInputRef}
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
