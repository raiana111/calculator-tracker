interface Income {
    category: string;
    amount: number;
    date: string;
  }
  
  interface Expense {
    category: string;
    amount: number;
    date: string;
  }
  
  interface Statistics {
    totalIncome: number;
    totalExpense: number;
    balance: number;
    incomeCategories: Record<string, number>;
    expenseCategories: Record<string, number>;
  }
  