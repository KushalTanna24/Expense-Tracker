import "./Expenses.css";

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpenseChart";
import "./ExpensesLists.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpense;

  if (filteredYear === "All") {
    filteredExpense = props.items;
  } else {
    filteredExpense = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpense} />
        {filteredExpense.length === 0 ? (
          <p className="expenses-list__fallback">No Expenses Found</p>
        ) : (
          filteredExpense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
