import React from 'react';
import Card from '../UI/Card.js';
//import classes from '../UI/Card.module.css';


const UsersList = props => {
    return (
      <Card >  
        <ul>
          {props.user.map((user) => (
            <li>
              {user.name} {user.age}
            </li>
          ))}
        </ul>
      </Card>
    );
}

export default UsersList;
