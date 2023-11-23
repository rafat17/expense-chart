const checkIfItemShapeIsInvalid = (item) => {
  const itemWithNumbers = Object.values(item).filter((item) => !isNaN(item));

  if (
    !item.period ||
    itemWithNumbers.length === 0 ||
    itemWithNumbers.length > 4
  ) {
    return true;
  }

  return false;
};

export default checkIfItemShapeIsInvalid;
