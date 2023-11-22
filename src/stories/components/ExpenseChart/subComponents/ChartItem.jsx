import PropTypes from "prop-types";
import Amount from "./Amount";
import {
  getTotalExpensesInFloat,
  getItemAmountInDegrees,
  getConicGradientString,
} from "../helpers/chartItem";

const ChartItem = ({ item, locale, currency }) => {
  const itemValues = Object.values(item);
  const itemWithNumbersOnly = itemValues.filter((item) => !isNaN(item));
  const totalExpenses = getTotalExpensesInFloat(itemWithNumbersOnly);
  const itemsWithStartEndDeg = getItemAmountInDegrees(
    itemWithNumbersOnly,
    totalExpenses
  );
  const conicGradientString = getConicGradientString(itemsWithStartEndDeg);

  return (
    <div
      style={{
        background: conicGradientString,
      }}
      className="expense-chart__chart-item expense-chart__chart-item--outer-circle"
    >
      <Amount lcoale={locale} currency={currency} amount={totalExpenses} />
    </div>
  );
};

ChartItem.defaultProps = {
  item: [],
};

ChartItem.propTypes = {
  item: PropTypes.shape({
    [PropTypes.string]: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  }),
  locale: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ChartItem;
