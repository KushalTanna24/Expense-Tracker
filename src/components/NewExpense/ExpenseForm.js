import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  // enteredTitle: "",
  // enteredAmount: "",
  // enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //alternatives
    // setUserInput({ ...userInput, enteredTitle: event.target.value }); //putting multiple state inside one state.

    // another way but using prevState
    // setUserInput((prevState => {
    // return{ ...prevState, enteredTitle: event.target.value};
    // }))
    // like wise we can do it in all the handler function
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    //alternatives
    // setUserInput({ ...userInput, enteredAmount: event.target.value }); //putting multiple state inside one state.
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    //alternatives
    // setUserInput({ ...userInput, enteredDate: event.target.value });   //putting multiple state inside one state.
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
