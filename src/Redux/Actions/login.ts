import { actionsTypes } from "../../Utils/functions";

function saveEmail(email: string) {
  return {
    type: actionsTypes.SAVE_EMAIL,
    payload: email,
  };
}

export default saveEmail;
