import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterDate, setFilterDate] = useState("2021");

  const changeFilterDate = (selectedDate) => {
    setFilterDate(selectedDate);
    console.log(filterDate);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterDate
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilterDate={changeFilterDate}
        filterDateState={filterDate}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
