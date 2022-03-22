import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <h2>Monthly Data Subscription App</h2>
      <Expenses items={ expenses } />
    </div>
  );
}

export default App;
