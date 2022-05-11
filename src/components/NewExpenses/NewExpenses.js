import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {
  const saveExpenceDataHandler = (savedExpenceData) => {
    const expenseData = {
      ...savedExpenceData,
      id: Math.ceil(Math.random() * 10).toString(),
    };
    props.onNewSavedData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpensesForm onSavedExpenceData={saveExpenceDataHandler} />
    </div>
  );
};

export default NewExpenses;
