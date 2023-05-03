import { WalletAction, WalletFormProps } from "../../Interfaces";

const INITIAL_STATE = {
  expenses: [],
  editExpenseId: 0,
};

function wallet(state = INITIAL_STATE, action: WalletAction) {
  switch (action.type) {
    case "SEND_EXPENSES":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSES":
      return {
        ...state,
        expenses: state.expenses.filter(
          ({ id }) => id !== Number(action.payload)
        ),
      };
    case "EDIT_VALUE":
      return {
        ...state,
        editExpenseId: action.payload,
      };
    case "SEND_EDITED_VALUE":
      return {
        ...state,
        expenses: [
          ...state.expenses.filter((expense: WalletFormProps) => expense.id !== (action.payload as WalletFormProps).id),
          action.payload,
        ],
        editExpenseId: 0
      };
    default:
      return state;
  }
}

export default wallet;
