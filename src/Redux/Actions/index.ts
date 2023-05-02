const SAVE_EMAIL = 'SAVE_EMAIL';

function saveEmail(email: string) {
  return {
    type: SAVE_EMAIL,
    payload: email,
  };
};

export default saveEmail;