import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(19, 3, 2021);
  const expenseAmount = 16000;
  const expenseTitle = "Monthly Data Subscription";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">#{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
