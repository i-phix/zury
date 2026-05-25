export const toCents = (dollars) => Math.round((dollars ?? 0) * 100)

export const toDollars = (cents) => (cents ?? 0) / 100

export const addAmounts = (...amounts) =>
  amounts.reduce((sum, a) => sum + (a ?? 0), 0)

export const calcLateFee = (amount, rate, days) =>
  amount * (rate / 100) * days
