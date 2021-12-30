/**
 * Capitalize first letter in word of string
 * @param string string
 * @returns {string}
 */
export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * * This function create a slug friendily to use in your web application
 * * Compatibility with chinese characters
 * * Chinese characters doesn't require any modification
 * @param {string} string
 * @returns {string} cleaned slug
 */
export const slugify = (string: string): string => {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    
    // Replace spaces with -
    .replace(/\s+/g, "-") 
    
    // Replace special characters
    .replace(p, (c) => b.charAt(a.indexOf(c))) 
    
    // Replace & with 'and'
    .replace(/&/g, "-and-") 
    
    // Remove all non-word characters
    .replace(/[^\w\-]+/g, "") 
    
    // Replace multiple - with single -
    .replace(/\-\-+/g, "-") 
    
    // Trim - from start of text
    .replace(/^-+/, "") 
    
    // Trim - from end of text
    .replace(/-+$/, "") 
    
    // Lower Case
    .toLocaleLowerCase();
};
