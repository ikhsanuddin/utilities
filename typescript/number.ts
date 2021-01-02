/** Add leadng zero in font of number below 10
 * @param number
 */
export function fixedZero(val: number) {
  return val * 1 < 10 ? `0${val}` : val;
}

/** ACurrency format using International number format
 *  Default in Indonesia
 */
export const formatCurrency = (
  value: number,
  prefix: string = "",
  option: {
    language?: string;
    maxDigits?: number;
    minDigits?: number;
  } = { language: "id-ID", maxDigits: 0 }
) => {
  const interlationaleNumber = new Intl.NumberFormat(option.language, {
    maximumFractionDigits: option.maxDigits,
    minimumFractionDigits: option.minDigits,
  });
  const formattedValue = `${
    prefix ? `${prefix} ` : ""
  }${interlationaleNumber.format(value)}`;
  return formattedValue;
};
