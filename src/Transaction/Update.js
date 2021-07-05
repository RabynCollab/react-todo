import React, { useState } from 'react'



const Update = ({ title, amount, date, updateExpense, id }) => {
  const [userInput, setInput] = useState({
    title: title,
    date: date,
    amount: amount,
    id: id
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    });
  }

  const handleSubmit = (e, id) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: userInput.date,
      id: userInput.id
    }
    updateExpense(userInput.id, expenseData);
  }
  return (
    <>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="form-label">Product </label>
        <input className="form-control"
          name='title'
          value={userInput.title}
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

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" onSubmit={handleSubmit} id="btn"
            data-bs-dismiss="modal" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </ >
  )
}
export default Update
