import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { DataContext } from '../context/data';


const NewExpense = () => {
  const [userInput, setInput] = useState({
    title: '',
    date: '',
    amount: '',
  });

  const ctx = useContext(DataContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: userInput.date,
      id: uuidv4()
    }
    ctx.onAddExpense(expenseData);
    setInput({
      title: '',
      date: '',
      amount: ''
    });
  }
  return (
    <div className="container">
      <div className="row justify-content-center col-lg-6 my-2 ">
        <form onSubmit={handleSubmit}>

          <label htmlFor="title" className="form-label">Product </label>
          <input className="form-control"
            name='title'
            value={userInput.title}
            minLength="7"
            onChange={handleChange}
            required
            type="text" />


          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            className="form-control"
            name="amount"
            value={userInput.amount}
            onChange={handleChange}
            required
            type="number" min="0.01" step="0.01" />



          <label htmlFor="Date" className="form-label">Date</label>
          <input
            className="form-control"
            name="date"
            value={userInput.date}
            onChange={handleChange}
            required
            type="date" min="2019-01-01" max="2022-12-31" />

          <button type="submit" className="btn btn-warning mt-3 align-center">Add Expense</button>

        </form>
      </div>
    </div >
  )
}

export default NewExpense
