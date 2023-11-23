import { COLOR_MAP } from "../constants";

export const getTotalAmountInFloat = (item, decimals = 2) => {
  const totalExpensesInFloat = Object.values(item).reduce(
    (totalAmount, currentItem) => totalAmount + currentItem,
    0
  );

  return totalExpensesInFloat.toFixed(decimals);
};

export const getItemsWithStartEndDegrees = (items, actualTotal) => {
  const itemAmountInDegrees = items.map((itemAmount) =>
    ((itemAmount / actualTotal) * 360).toFixed(1)
  );

  let totalDegrees = 0;
  const itemsWithStartEndDegrees = [];

  for (let i = 0; i < itemAmountInDegrees.length; i++) {
    const endDegree = totalDegrees + parseFloat(itemAmountInDegrees[i]);
    itemsWithStartEndDegrees.push({
      startDeg: totalDegrees,
      endDeg: endDegree.toFixed(1),
      color: COLOR_MAP[i],
    });

    totalDegrees = endDegree;
  }

  return itemsWithStartEndDegrees;
};

export const getConicGradientString = (items) => {
  const itemsStringWithStartEndDeg = items.map(
    ({ color, startDeg, endDeg }) => `${color} ${startDeg}deg ${endDeg}deg`
  );

  return `conic-gradient(${itemsStringWithStartEndDeg.join(", ")})`;
};
