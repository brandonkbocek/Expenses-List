import React, { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditing = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} selected={isEditing}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={onSaveExpenseDataHandler}
                    onCancel={stopEditing}
                />
            )}
        </div>

    );
}

export default NewExpense;