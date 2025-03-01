interface Function {
    myCall(this: Function, thisArg: any, ...argArray: any[]): any;
  }
  
  Function.prototype.myCall = function (thisArg, ...argArray) {
    // default to global variable if null or undef
    thisArg = (thisArg === null || thisArg === undefined) ? globalThis : Object(thisArg); 
    // unique property using symbol to avoid collisions
    const fnSymbol = Symbol('fn'); 
    thisArg[fnSymbol] = this;
    const result = thisArg[fnSymbol](...argArray); // call func with supplied args
    delete thisArg[fnSymbol]; // remove temp property
    return result
  };