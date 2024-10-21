/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue: number = 0) :() => number {
    let count = initialValue;
    
    return () => {
      return count++;
    };
  }