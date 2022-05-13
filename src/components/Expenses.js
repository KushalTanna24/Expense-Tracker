import { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpenseTacker from "./ExpenseTacker";
import ExpensesFilter from "./Filter/ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterHandler={yearFilterHandler}
          selected={selectedYear}
        />
        {props.expenses.map((expense) => (
          <ExpenseTacker
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
