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

export {saveEmail, sendExpenses, deleteExpenses};