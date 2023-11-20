import ExpensesTab from "./components/ExpensesTab";

export default {
  title: 'Example/ExpensesTab',
  component: ExpensesTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    label: 'ExpensesTab',
  },
};

export const Secondary = {
  args: {
    label: 'ExpensesTab',
  },
};