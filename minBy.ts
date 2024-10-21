export default function minBy<T>(
    array: Array<T>,
    iteratee: (value: T) => any,
  ): any {
    let result, computed;
  
    for (const value of array) {
      const current = iteratee(value);
      if (current != null && (computed === undefined || computed > current)) {
        computed = current;
        result = value;
      }
    }
    return result;
  }