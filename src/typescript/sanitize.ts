/** Make Object have a unique value,
 * remove value that invalid or empty
 * @param {any} object
 * @param {Object} option Option to object value that need to be included
 * @return {any}
 **/
export const sanitizeObject = (
  object: any,
  option: {
    acceptEmptyString: boolean;
    acceptNull: boolean;
    acceptUndefined: boolean;
    acceptEmptyObject: boolean;
    acceptEmptyArray: boolean;
    acceptBoolean: boolean;
    acceptZero: boolean;
  } = {
    acceptEmptyString: false,
    acceptNull: false,
    acceptUndefined: false,
    acceptEmptyObject: false,
    acceptEmptyArray: false,
    acceptBoolean: true,
    acceptZero: true,
  }
): any => {
  const {
    acceptBoolean,
    acceptEmptyArray,
    acceptEmptyObject,
    acceptEmptyString,
    acceptNull,
    acceptUndefined,
    acceptZero,
  } = option;
  return Object.keys(object).reduce((prev, key) => {
    const val = object[key];
    const type = typeof val;
    switch (type) {
      case "string":
        if (acceptEmptyString || val) {
          prev[key] = val;
        }
        break;
      case "boolean":
        if (acceptBoolean || val) {
          prev[key] = val;
        }
        break;
      case "number":
        if (acceptZero || val) {
          prev[key] = val;
        }
        break;
      case "undefined":
        if (acceptUndefined || val) {
          prev[key] = val;
        }
        break;
      case "object":
        if (Array.isArray(val)) {
          if (acceptEmptyArray || val.length > 0) {
            prev[key] = val;
          }
        } else if (val === null) {
          if (acceptNull || val) {
            prev[key] = val;
          }
        } else if (acceptEmptyObject || Object.keys(val).length > 0) {
          prev[key] = val;
        }
        break;
      default:
        break;
    }
    return prev;
  }, {});
};

/** Make Array have a unique value,
 * remove value that duplicate
 * @param {any[]} array
 * @return {any[]}
 **/
export const distinctArray = (array: any[]): any[] => {
  return [...new Set(array)];
};
