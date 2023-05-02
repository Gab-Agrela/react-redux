import { WalletAction } from "../../Interfaces";

const INITIAL_STATE = {
  expenses: [],
};

function wallet(state = INITIAL_STATE, action: WalletAction) {
  switch (action.type) {
  case 'SEND_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],

    };
  case 'DELETE_EXPENSES':
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== Number(action.payload)),

    };
  default:
    return state;
  }
}

export default wallet;