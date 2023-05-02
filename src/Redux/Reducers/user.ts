import {EmailAction} from "../../Interfaces";

const INITIAL_STATE = {
  email: '', 
};

function user(state = INITIAL_STATE, action: EmailAction) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;