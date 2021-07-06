import ExpenseItem from './Transaction/ExpenseItem';
import NewExpense from './Transaction/Create';
import DataContextProvider from './context/data';

const App = () => {

  return (
    <DataContextProvider>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h1 className="navbar-brand ">Transaction Todo</h1>
        </div>

      </nav>
      <div className="container-fluid">
        <NewExpense />
        <div className="container">
          <ExpenseItem />
        </div>
      </div>

    </DataContextProvider>
  )
}

export default App
