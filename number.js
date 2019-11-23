export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}
