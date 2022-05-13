import React, { useState } from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenceDataHandler = (savedExpenceData) => {
    const expenseData = {
      ...savedExpenceData,
      id: Math.ceil(Math.random() * 10).toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const showFormHandler = () => {
    setIsEditing(true);
  };

  const hideFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpensesForm
          onSavedExpenceData={saveExpenceDataHandler}
          onCanceldForm={hideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
