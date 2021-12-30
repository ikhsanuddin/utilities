import * as error from "./typescript/error";
import * as number from "./typescript/number";
import * as pagination from "./typescript/pagination";
import * as regex from "./typescript/regex";
import * as sanitize from "./typescript/sanitize";
import * as storage from "./typescript/storage";
import * as text from "./typescript/text";

export * from "./typescript/error";
export * from "./typescript/number";
export * from "./typescript/pagination";
export * from "./typescript/regex";
export * from "./typescript/sanitize";
export * from "./typescript/storage";
export * from "./typescript/text";

export default {
  ...error,
  ...number,
  ...pagination,
  ...regex,
  ...sanitize,
  ...storage,
  ...text,
};
