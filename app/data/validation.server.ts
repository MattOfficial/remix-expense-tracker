import { ExpenseType } from "~/types/expenses";

function isValidTitle(value: string) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}

function isValidAmount(value: number | string) {
  const amount = typeof value === "string" ? parseFloat(value) : value;
  return !isNaN(amount) && amount > 0;
}

function isValidDate(value: string | number | Date): boolean {
  let date: Date;

  if (typeof value === "string" || typeof value === "number") {
    date = new Date(value);
  } else {
    date = value;
  }

  return (
    date instanceof Date &&
    !isNaN(date.getTime()) &&
    date.getTime() < new Date().getTime()
  );
}

export function validateExpenseInput(input: ExpenseType) {
  const validationErrors: { [key: string]: string } = {};

  if (!isValidTitle(input.title)) {
    validationErrors.title =
      "Invalid expense title. Must be at most 30 characters long.";
  }

  if (!isValidAmount(input.amount)) {
    validationErrors.amount =
      "Invalid amount. Must be a number greater than zero.";
  }

  if (!isValidDate(input.date)) {
    validationErrors.date = "Invalid date. Must be a date before today.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
