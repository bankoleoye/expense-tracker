import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "100GB",
      amount: 40000,
      date: new Date(2021, 11, 9),
    },
    {
      id: "e2",
      title: "80GB",
      amount: 20000,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e3",
      title: "50GB",
      amount: 15000,
      date: new Date(2022, 1, 19),
    },
    {
      id: "e3",
      title: "90GB",
      amount: 35000,
      date: new Date(2022, 2, 22),
    },
  ];

  return (
    <div>
      <h2>Lets's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
