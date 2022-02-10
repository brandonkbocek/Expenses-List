import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expenses = [
    {title: 'Car Insurance', amount: 294.51, date: new Date(2022, 1, 1)},
    {title: 'Football ticket', amount: 394.33, date: new Date(2020, 4, 22)},
    {title: 'Gameboy', amount: 39.99, date: new Date(2022, 1, 12)},
    {title: 'Phone bill', amount: 94.22, date: new Date(2021, 3, 29)}
  ]

  return (
  <div>
    <NewExpense />
    <Expenses items={expenses} />
  </div>
  
  );
 
}

export default App;
