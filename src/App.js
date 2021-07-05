import React, { useEffect, useState } from 'react'
import ExpenseItem from './Transaction/ExpenseItem'
import NewExpense from './Transaction/Create';

const App = () => {
  const db = JSON.parse(localStorage.getItem('data')) || [];

  const [expense, setExpenses] = useState(db);

  useEffect(() => {
    localStorage.setItem(
      'data', JSON.stringify(expense));
  }, [expense])



  const onAddExpense = (data) => {
    setExpenses((prev) => {
      return [...prev, data];
    });

  }

  const removeExpense = (id) => {
    setExpenses((prev) => {
      return prev.filter((item) => item.id !== id);
    })
  }

  const updateExpense = (id, nItem) => {
    const update = [...expense].map((item) => {
      if (item.id === id) {
        item = nItem;
      }
      return item;
    });

    setExpenses(update);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h1 className="navbar-brand ">Transaction Todo</h1>
        </div>

      </nav>
      <div className="container-fluid">

        <NewExpense addExpense={onAddExpense} />
        <div className="container">
          <ExpenseItem expenses={expense}
            updateExpense={updateExpense}
            removeExpense={removeExpense} />
        </div>



      </div>

    </div>
  )
}

export default App
