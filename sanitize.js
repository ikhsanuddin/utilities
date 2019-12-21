export const sanitizeObject = (
  object,
  option = {
    acceptEmptyString: false,
    acceptNull: false,
    acceptUndefined: false,
    acceptEmptyObject: false,
    acceptEmptyArray: false,
    acceptBoolean: true,
    acceptZero: true,
  }
) => {
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

export const distinctArray = (array) => {
  [...new Set(array)];
};
