import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const selectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filtredByYear = props.items.filter((filtredItem) => {
    return filtredItem.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onSelectedYear={selectedYearHandler} />
      <ExpensesChart expenses={filtredByYear} />
      <ExpensesList items={filtredByYear} />
    </Card>
  );
};

export default Expenses;
