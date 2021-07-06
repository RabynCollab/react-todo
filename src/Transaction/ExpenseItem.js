import { useContext } from "react";
import { DataContext } from "../context/data";
import Update from "./Update";


const ExpenseItem = () => {
  const ctx = useContext(DataContext);
  const data = ctx.expense.map((item) => {
    return <div className="row align-items-center " key={item.id}>
      <div className="col-lg-8 mt-3 ">
        <div className="card border-0 bg-light">
          <div className="card-body p-3 ">
            <p className="card-title">
              PRODUCT NAME: {item.title.toUpperCase()}
            </p>
            <p className="lead card-subtitle"> AMOUNT: {item.amount}</p>
            <p className="lead card-subtitle">PURCHASE DATE: {item.date}</p>
          </div>
          <div className="d-flex justify-content-end p-3">
            <button className="btn btn-dark" onClick={() => ctx.removeExpense(item.id)}>Remove</button>

            <button className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target={`#${item.title.substring(0, 5).trim()}`} data-bs-whatever="@mdo">Update</button>
            <div className="modal fade" id={item.title.substring(0, 5).trim()} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Update Ttansaction</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <Update title={item.title} amount={item.amount} date={item.date} id={item.id} />

                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div >
  });

  return (
    <>
      {data}
    </>
  )
}

export default ExpenseItem
