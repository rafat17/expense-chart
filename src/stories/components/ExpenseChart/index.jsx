import PropTypes from "prop-types";
import { TabContent, ExpenseLegends } from "./subComponents";
import "./index.scss";

const getLegendLabels = (data) => {
  if (Array.isArray(data) && data.length > 0 && data.length < 5) {
    const singleItem = data[0];

    return Object.keys(singleItem).filter((item) => item !== "period");
  }

  return [];
};

const ExpenseChart = ({ width, height, data, locale, currency }) => (
  <div
    style={{
      width,
      height,
    }}
    className="d-flex-col align-center justify-center expense-chart__card"
  >
    <h2>Expenses</h2>
    <div className="d-flex-col align-center justify-center">
      <TabContent items={data} locale={locale} currency={currency} />
    </div>
    <ExpenseLegends legends={getLegendLabels(data)} />
  </div>
);

ExpenseChart.defaultProps = {
  width: "100%",
  height: "100%",
  data: [],
  locale: "en-US",
  currency: "USD",
};

ExpenseChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      [PropTypes.string]: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    })
  ),
  locale: PropTypes.string,
  currency: PropTypes.string,
};

export default ExpenseChart;
