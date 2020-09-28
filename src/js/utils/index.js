/**
 * @param {Number} value Variable that needs to be converted
 * @param {Number} dividend Number that will be used in the convertion
*/
export function convertUnity(value, dividend) {
  try {
    const parseValue = Number(value);
    const parseDividend = Number(dividend);

    return (parseValue / parseDividend).toFixed(1);
  }
  catch(error) {
    console.error(`[convertUnity] ${error}`)
  }
}