import PropTypes from "prop-types";
import { COLOR_MAP } from "../constants/colorMap";

const LegendItem = ({ label, color }) => (
  <div className="d-flex justify-center align-center expense-chart__legend-item">
    <span
      className="expense-chart__legend--color"
      style={{ background: color }}
    />
    <span className="expense-chart__legend--label">{label}</span>
  </div>
);

LegendItem.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const ExpenseLegends = ({ legends }) => (
  <div className="d-flex align-center wrap expense-chart__legends">
    {legends.map((label, index) => (
      <LegendItem key={label} color={COLOR_MAP[index]} label={label} />
    ))}
  </div>
);

ExpenseLegends.defaultProps = {
  legends: [],
};

ExpenseLegends.propTypes = {
  legends: PropTypes.arrayOf(PropTypes.string),
};

export default ExpenseLegends;
