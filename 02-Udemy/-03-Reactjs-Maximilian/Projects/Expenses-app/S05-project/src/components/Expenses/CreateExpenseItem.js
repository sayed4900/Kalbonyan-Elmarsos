import React, { useState } from "react";

import "./CreateExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { filter } from "bluebird";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const CreateExpenseItem = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
};
export default CreateExpenseItem;
