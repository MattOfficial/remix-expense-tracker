import { ExpenseType } from "~/types/expenses";
import { prisma } from "./database.server";

/**
 * Retrieves all expenses from the database, ordered by date in descending order.
 *
 * @returns {Promise<ExpenseType[]>} - A promise that resolves to an array of ExpenseType objects representing the expenses.
 * @throws {Error} - If there is an error retrieving the expenses from the database.
 */
export async function getExpenses(userId: string): Promise<ExpenseType[]> {
  const retrievalError = new Error("Error retrieving expenses");

  if (!userId) {
    throw retrievalError;
  }
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" },
    });
  } catch (error) {
    throw retrievalError;
  }
}

/**
 * Retrieves an expense record from the database based on the provided ID.
 *
 * @param {string} id - The unique identifier of the expense record to retrieve.
 * @returns {Promise<ExpenseType | null>} A Promise that resolves with the expense record if found, or null if not found.
 * @throws {Error} - If there is an error retrieving the expenses from the database.
 */
export async function getExpense(id: string, userId: string) {
  const retrievalError = new Error("Error retrieving expense");

  if (!userId) {
    throw retrievalError;
  }
  try {
    return await prisma.expense.findUnique({ where: { userId, id } });
  } catch (error) {
    throw retrievalError;
  }
}

/**
 * Adds a new expense record to the database.
 *
 * @param {ExpenseType} expenseData - An object containing the expense data to be added.
 * @returns {Promise<ExpenseType>} A Promise that resolves with the newly created expense record.
 */
export async function addExpense(expenseData: ExpenseType, userId: string) {
  const addError = new Error("Error adding expense");

  if (!userId) {
    throw addError;
  }

  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: expenseData.amount,
        date: new Date(expenseData.date),
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    throw addError;
  }
}

/**
 * Updates an existing expense record in the database.
 *
 * @param {string} id - The unique identifier of the expense record to update.
 * @param {ExpenseType} expenseData - An object containing the updated expense data.
 *
 * @returns {Promise<void>} A Promise that resolves when the expense record is updated.
 */
export async function updateExpense(
  id: string,
  expenseData: ExpenseType
): Promise<void> {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    throw new Error("Error updating expense");
  }
}

/**
 * Deletes an existing expense record in the database.
 *
 * @param {string} id - The unique identifier of the expense record to update.
 *
 * @returns {Promise<boolean>} - A Promise that resolves when the expense record is deleted with true if it was successfully deleted or false if there was an error.
 */
export async function deleteExpense(id: string) {
  try {
    return await prisma.expense.delete({ where: { id } });
  } catch (error) {
    throw new Error("Error deleting expense");
  }
}
