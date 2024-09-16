import { ExpenseType } from "~/types/expenses";
import { prisma } from "./database.server";

export async function addExpense(expenseData: ExpenseType) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    // TODO: Add proper error handling later
    console.error("Error adding expense:", error);
    throw error;
  }
}

export async function getExpenses() {
  try {
    return await prisma.expense.findMany({
      orderBy: { date: "desc" },
    });
  } catch (error) {
    // TODO: Add proper error handling later
    console.error("Error getting expenses:", error);
    throw error;
  }
}

export async function getExpense(id: string) {
  try {
    return await prisma.expense.findUnique({ where: { id } });
  } catch (error) {
    // TODO: Add proper error handling later
    console.error("Error getting expense:", error);
  }
}
