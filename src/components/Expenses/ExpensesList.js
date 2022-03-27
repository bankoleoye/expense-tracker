import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    return (
        <ul className="expenses-list">
            {
                props.items.map((expesnes) => (
                    <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
                ))
            };
        </ul>

    );
}

export default ExpenseList;