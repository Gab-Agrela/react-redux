import { WalletFormProps } from "../../Interfaces";
import { actionsTypes } from "../../Utils/functions/enum";

function saveEmail(email: string) {
  return {
    type: actionsTypes.SAVE_EMAIL,
    payload: email,
  };
};

function sendExpenses(object: WalletFormProps) {
  return {
    type: actionsTypes.SEND_EXPENSES,
    payload: object,
  };
}

function deleteExpenses(id: number) {
  return {
    type: actionsTypes.DELETE_EXPENSES,
    payload: id,
  };
}

function editExpenseValue(id: number) {
  return {
    type: actionsTypes.EDIT_VALUE,
    payload: id,
  };
}

function sendNewExpenseValue(object: WalletFormProps) {
  return {
    type: actionsTypes.SEND_EDITED_VALUE,
    payload: object,
  };
}

export {saveEmail, sendExpenses, deleteExpenses, editExpenseValue, sendNewExpenseValue};