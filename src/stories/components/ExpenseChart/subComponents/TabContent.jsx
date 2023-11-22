import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ChartItem from "./ChartItem";

const TabNavigatorContent = ({ children }) => (
  <div className="d-flex justify-between align-center expense-chart__tab-navigator">
    {children}
  </div>
);

TabNavigatorContent.defaultProps = {
  children: null,
};

TabNavigatorContent.propTypes = {
  children: PropTypes.node,
};

const TabNavigatorItem = ({ label, isActive, onClick }) => (
  <button
    className={classNames("expense-chart__tab-navigator-item", {
      "expense-chart__tab-navigator-item--active": isActive,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);

TabNavigatorItem.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TabContent = ({ items, locale, currency }) => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

  const timePeriods = items.map((item) => item.period);

  const handleOnTabItemClick = (index) => {
    setCurrentActiveIndex(index);
  };

  const currentItem = items[currentActiveIndex];

  return (
    <div className="d-flex-col align-center justify-center expense-chart__tab-content">
      <TabNavigatorContent>
        {timePeriods.map((tabItemLabel, index) => (
          <TabNavigatorItem
            key={tabItemLabel}
            label={tabItemLabel}
            isActive={index === currentActiveIndex}
            onClick={() => handleOnTabItemClick(index)}
          />
        ))}
      </TabNavigatorContent>
      <ChartItem locale={locale} currency={currency} item={currentItem} />
    </div>
  );
};

TabContent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      [PropTypes.string]: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    })
  ).isRequired,
  locale: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TabContent;
