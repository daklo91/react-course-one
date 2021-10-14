import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm(!openForm);
  };

  return (
    <div className="new-expense">
      {!openForm && <button onClick={openFormHandler}>Add New Expense</button>}
      {openForm && (
        <ExpenseForm
          addNewExpenseHandler={props.addNewExpense}
          closeForm={openFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
