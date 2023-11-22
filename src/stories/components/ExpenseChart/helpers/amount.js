const CURRENCY = "currency";

export const getCurrencySymbol = (locale, currency) =>
  new Intl.NumberFormat(locale, { style: CURRENCY, currency })
    .formatToParts(1)
    .find((x) => x.type === CURRENCY).value;

export const getFormattedAmount = (locale, amount) =>
  new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);

export const getAmountInWholeNumber = (amount) => amount.split(".")[0];

export const getFractionalDigits = (amount) => amount.split(".")[1];
