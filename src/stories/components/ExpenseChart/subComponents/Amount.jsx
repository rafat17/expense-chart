import PropTypes from "prop-types";
import {
  getCurrencySymbol,
  getFormattedAmount,
  getAmountInWholeNumber,
  getFractionalDigits,
} from "../helpers/amount";

const Amount = ({ locale, currency, amount }) => {
  const currencySymbol = getCurrencySymbol(locale, currency);
  const formattedAmount = getFormattedAmount(locale, amount);
  const amountInWholeNumber = getAmountInWholeNumber(formattedAmount);
  const fractionalDigits = getFractionalDigits(formattedAmount);

  return (
    <div className="d-flex justify-center align-center expense-chart__chart-item expense-chart__chart-item--inner-circle expense-chart__chart-item--amount">
      <h4 className="expense-chart__chart-item--currency-amount">
        {currencySymbol}&nbsp;{amountInWholeNumber}
      </h4>
      <span className="expense-chart__chart-item--amount-fractions">
        .{fractionalDigits}
      </span>
    </div>
  );
};

Amount.defaultProps = {
  locale: "en-US",
  currency: "USD",
};

Amount.propTypes = {
  locale: PropTypes.string,
  currency: PropTypes.string,
  amount: PropTypes.string.isRequired,
};

export default Amount;
