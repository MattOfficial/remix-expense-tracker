import { ExpenseType } from "~/types/expenses";
import { AuthCredentialType } from "~/types/authentication";
import { FormValidationResponseType } from "~/types/validation";

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
  const validationErrors: FormValidationResponseType = {};

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

function isValidEmail(value: string) {
  return value && value.includes("@");
}

function isValidPassword(value: string) {
  return value && value.trim().length >= 7;
}

export function validateCredentials(input: AuthCredentialType) {
  const validationErrors: FormValidationResponseType = {};

  if (!isValidEmail(input.email)) {
    validationErrors.email = "Invalid email address.";
  }

  if (!isValidPassword(input.password)) {
    validationErrors.password =
      "Invalid password. Must be at least 7 characters long.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
