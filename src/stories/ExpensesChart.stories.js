import ExpenseChart from "./components/ExpenseChart";
import dummyExpenseData from "./components/ExpenseChart/data/dummyExpenseData";

export default {
  title: "Example/ExpenseChart",
  component: ExpenseChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    data: dummyExpenseData,
    width: "561px",
    height: "545px",
  },
};
