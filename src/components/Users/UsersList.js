import React from 'react';
import Card from '../UI/Card.js';
import classes from '../UI/Card.module.css';


const UsersList = props => {
    return (
      <Card >  
        <ul>
          {props.user.map((user) => (
            <div className={classes.some}>
            <li key={user.id }>
              {user.name} {user.age}
            </li>
            </div>
          ))}
        </ul>
      </Card>
    );
}

export default UsersList;
