import { BREAKPOINTS } from "@/configs/constants"
import { Breakpoint } from "@/types"

/**
 * Checks if input is a plain object (excludes other "object" types like arrays, dates, etc.).
 *
 * @param {any} input Element to validate.
 * @return {boolean} True if input is a plain object, false otherwise.
 */
export function isObject(input: any): boolean {
  return (
    input !== null &&
    typeof input === 'object' &&
    Object.prototype.toString.call(input) === '[object Object]'
  );
}

/**
 * Checks if a value is an empty object (has no own properties).
 *
 * @param {any} input Object to validate.
 * @return {boolean} True if the object is empty, false otherwise.
 * @throws Error if input is not a plain object.
 */
export function isEmptyObject(input: any): boolean {
  if (!isObject(input)) {
    throw new TypeError(
      `[isEmptyObject] argument must be a plain object; received type '${typeof input}'`
    );
  }

  return Object.keys(input).length === 0;
}

/**
 * Checks if the value is not null or undefined.
 *
 * @param value The value to check.
 * @returns True if the value is neither null nor undefined, otherwise false.
 */
export function isDefined(value: any): boolean {
  return value !== null && value !== undefined
}

/**
 * Ensures that boolean values are treated as such (1 or '1' to true, and 0 or '0' to false).
 * Returns the original value if it doesn't match these criteria.
 *
 * @param value The value to transform.
 * @returns The transformed boolean value or the original value.
 */
export function ensureBoolean(value: any): boolean | any {
  if (value === 1 || value === '1') {
    return true
  }
  if (value === 0 || value === '0') {
    return false
  }
  return value
}

/**
 * Returns a string of css classes from the provided array values.
 *
 * @param {string[]} arr - Array containing the css classnames.
 * @return {string} Formatted css classes.
 */
export function getCssClassesFromArray(arr: string[]): string {
  return arr.join(' ')
}

/**
 * Formats a css class.
 *
 * @param {string} input - String containing one or many properties, separated by spaces, that can be responsive.
 * @param {string} valuePrefix - Tailwind classname prefix to prepend to each prop. E.g prop=col, valuePrefix=flex returns "flex-col". Default: undefined.
 * @param {Breakpoint | null} breakpoint - Breakpoint to use for formatting. Default: `null`.
 * @return {string} Formatted css classname.
 */
function formatCssClassname(
  input: string,
  valuePrefix: string = '',
  breakpoint: Breakpoint | null = null
): string {
  let bp = ''

  if (breakpoint) {
    bp = `${breakpoint}:`
  }

  if (!valuePrefix) {
    return bp + input
  }

  return bp + valuePrefix + '-' + input
}

/**
 * Returns responsive css classes for the given properties.
 *
 * @param {string} prop - String containing one or many properties, separated by spaces, that can be responsive.
 * @param {string} valuePrefix - Tailwind classname prefix to prepend to each prop. E.g prop=col, valuePrefix=flex returns "flex-col". Default: undefined.
 * @param {Breakpoint[]} breakpoints - Array of breakpoints to use for formatting. Default: values of type Breakpoint.
 * @return {string} String of responsive tailwind classes.
*/
export const getResponsiveCssClasses = (
  prop: string,
  valuePrefix: string = '',
  breakpoints: Breakpoint[] = BREAKPOINTS
): string => {
  const input = prop.split(' ')

  const output: string[] = []

  for (let inputItem of input) {
    if (inputItem.includes(':')) {
      const classParts = inputItem.split(':')
      const breakpoint = classParts[0]
      const className = classParts[1]

      if (breakpoints.includes(breakpoint as Breakpoint)) {
        output.push(formatCssClassname(className, valuePrefix, breakpoint as Breakpoint))
      }
    } else {
      output.push(formatCssClassname(inputItem, valuePrefix))
    }
  }

  return output
    .join(',')
    .replaceAll(',', ' ')
}
