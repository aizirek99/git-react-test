import "./ExpenseItem.css";
import "./ExpenseDate.jsx";

function ExpenseItem(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <ExpenseItem date={props.date} />
      <h2 className="expense-item__description">{expenseTitle}</h2>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
