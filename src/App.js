import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (newExpenseData) => {
    console.log(newExpenseData);
    console.log("Logged in App.js");
  };

  return (
    <div>
      <NewExpenses onNewSavedData={addExpenseHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
};

export default App;
