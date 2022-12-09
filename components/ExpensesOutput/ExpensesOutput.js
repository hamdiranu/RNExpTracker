import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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
    description: "A Glasses",
    amount: 200.0,
    date: new Date("2022-02-05"),
  },
  {
    id: "e7",
    description: "A Glasses",
    amount: 200.0,
    date: new Date("2022-02-05"),
  },
  {
    id: "e8",
    description: "A Glasses",
    amount: 200.0,
    date: new Date("2022-02-05"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
