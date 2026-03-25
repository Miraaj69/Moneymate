import { create } from 'zustand';

export const useStore = create((set) => ({
  balance: 0,
  expenses: [],
  portfolio: [],

  addExpense: (expense) =>
    set((state) => ({ expenses: [...state.expenses, expense] })),

  setPortfolio: (data) => set({ portfolio: data }),

  setBalance: (amount) => set({ balance: amount })
}));
