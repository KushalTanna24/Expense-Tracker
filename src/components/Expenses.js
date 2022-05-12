import { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpenseTacker from "./ExpenseTacker";
import ExpensesFilter from "./Filter/ExpensesFilter";

const Expense = (props) => {
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
        <ExpenseTacker
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseTacker
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseTacker
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseTacker
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expense;
