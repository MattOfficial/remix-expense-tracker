export interface ExpenseType {
  id?: string;
  title: string;
  amount: number;
  date: string | number | Date;
  dateAdded?: string | number | Date;
}
