import { useState } from "react";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const AgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years) </label>
        <input id="age" type="number" onChange={AgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
