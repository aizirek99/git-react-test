// import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  <h1>Hello</h1>
  const expenes = [
    {
      id: "e1",
      title: "book",
      amount: 1.5,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "notebook",
      amount: 600,
      date: new Date(2020, 8, 15),
    },
  ];
  return (
    
    <div className="App">
      <ExpenseItem
        title={expenes[0].title}
        amount={expenes[0].amount}
        date={expenes[0].date}
      />
      <ExpenseItem
        title={expenes[1].title}
        amount={expenes[1].amount}
        date={expenes[1].date}
      />
    </div>
  );
}

export default App;
