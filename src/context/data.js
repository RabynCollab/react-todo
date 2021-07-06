import { createContext, useEffect, useState } from "react";


export const DataContext = createContext({
  expense: [],
  updateExpense: [],
  removeExpense: () => { },
  onAddExpense: () => { }
});

const DataContextProvider = (props) => {

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

  return <DataContext.Provider value={{
    expense,
    updateExpense,
    removeExpense,
    onAddExpense
  }}>
    {props.children}
  </DataContext.Provider>
}


export default DataContextProvider;