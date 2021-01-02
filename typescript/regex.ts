export const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
export const phoneRegex = /^(\+?|[0])[2-9](\d{1,3})(\d{7,8})$/;
export const usernameRegex = /^(?!.*[_.]{2})([\w.]){4,20}$/;
export const urlRegex =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isEmail(path) {
  return emailRegex.test(path);
}

export function isPhone(path) {
  return phoneRegex.test(path);
}

export function isUsername(path) {
  return usernameRegex.test(path);
}

export function isUrl(path) {
  return urlRegex.test(path);
}
