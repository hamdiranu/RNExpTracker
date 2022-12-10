import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-11-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 72.99,
    date: new Date("2021-12-02"),
  },
  {
    id: "e3",
    description: "A Book",
    amount: 32.53,
    date: new Date("2022-01-11"),
  },
  {
    id: "e4",
    description: "A Watch",
    amount: 102.77,
    date: new Date("2022-01-21"),
  },
  {
    id: "e5",
    description: "A Glasses",
    amount: 200.0,
    date: new Date("2022-02-05"),
  },
  {
    id: "e6",
    description: "A TV",
    amount: 1000.0,
    date: new Date("2022-12-05"),
  },
  {
    id: "e7",
    description: "An Iphone 14",
    amount: 2000.0,
    date: new Date("2022-12-08"),
  },
  {
    id: "e8",
    description: "A Shoes",
    amount: 50.97,
    date: new Date("2022-12-09"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
