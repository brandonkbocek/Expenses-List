import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUUMMY_EXPENSES = [
  {id: 'e1', title: 'Car Insurance', amount: 294.51, date: new Date(2022, 1, 1)},
  {id: 'e2', title: 'Football ticket', amount: 394.33, date: new Date(2020, 4, 22)},
  {id: 'e3', title: 'Gameboy', amount: 39.99, date: new Date(2022, 1, 12)},
  {id: 'e4', title: 'Phone bill', amount: 94.22, date: new Date(2021, 3, 29)}
]

function App() {

  const [expenses, setExpenses] = useState(DUUMMY_EXPENSES);

const addExpenseHandler = expense => {
  setExpenses(prevExpenses => {
    return [expense, ...prevExpenses];
  });
};

  return (
  <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
  </div>
  
  );
 
}

export default App;
