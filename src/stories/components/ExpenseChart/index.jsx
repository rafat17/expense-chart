import PropTypes from "prop-types";
import { TabContent, ExpenseLegends } from "./subComponents";
import checkIfItemShapeIsInvalid from "./helpers/checkItemShape";
import { INVALID_ITEM_SHAPE, NO_ITEMS_FOUND, TIME_PERIOD } from "./constants";
import "./index.scss";

const getLegendLabels = (data) => {
  if (data.length > 0) {
    const singleItem = data[0];

    return Object.keys(singleItem).filter((item) => item !== TIME_PERIOD);
  }

  return [];
};

const ExpenseChart = ({ width, height, data, locale, currency }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return NO_ITEMS_FOUND;
  }

  const dataHasInvalidItems = data.some((item) =>
    checkIfItemShapeIsInvalid(item)
  );

  if (dataHasInvalidItems) {
    return INVALID_ITEM_SHAPE;
  }

  return (
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
};

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
      ]),
    })
  ),
  locale: PropTypes.oneOf(["en-US", "en-GB"]),
  currency: PropTypes.oneOf(["USD", "EUR"]),
};

export default ExpenseChart;
