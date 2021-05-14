export function nameIsvValid(name: string) {
  return /^([A-Za-z&áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}\s){1}([A-Za-z&áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{1,}\s?){1,}$/.test(
    name,
  );
}

export function validateEmail(email: string) {
  // eslint-disable-next-line no-use-before-define
  const regex =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

export function validateMinLength(text: string, minLength: number) {
  return text.length >= minLength;
}

export function isValidPassword(password: string) {
  try {
    if (validateMinLength(password, 6)) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
