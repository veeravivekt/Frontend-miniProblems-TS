/**
 * @param {Array<number>} array - Array from which the elements are all numbers.
 * @return {number} Returns mean.
 */
export default function mean(array: number[]): number {
    let total: number = 0;
    for (let i = 0; i < array.length; i++) total += array[i];
    return total / array.length;
  }