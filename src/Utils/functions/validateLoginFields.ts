const validateEmail = (email: string): boolean => {
  const regEx = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
};

const validatePassowrd = (password: string): boolean => {
  const minPasswordLength = 6;
  return password.length >= minPasswordLength;
};

const validateLogin = (email: string, password: string): boolean => {
  const emailIsValid = validateEmail(email);
  const passwordIsValid = validatePassowrd(password);
  return emailIsValid && passwordIsValid
}

export default validateLogin;