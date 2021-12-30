export const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi;
export const phoneRegex = /^(\+?|[0])[2-9](\d{1,3})(\d{7,8})$/;
export const usernameRegex = /^(?!.*[_.]{2})([\w.]){4,20}$/;
export const urlRegex =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isEmail(string: string): boolean {
  return emailRegex.test(string);
}

export function isPhone(string: string): boolean {
  return phoneRegex.test(string);
}

export function isUsername(string: string): boolean {
  return usernameRegex.test(string);
}

export function isUrl(string: string): boolean {
  return urlRegex.test(string);
}
