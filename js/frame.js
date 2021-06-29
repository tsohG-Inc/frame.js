/*!
 * Frame.js v0.1.0
 * (c) 2021 Anthony Lahmann
 * Released under the MIT License.
 */
(function(global, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    global = global || self;
    global.Frame = factory();
  }
})(this, function() {
  "use strict";
  
  /* */
  
  var version = "0.1.0";
  
  var frameError = "[FrameError] ";
  
  function error(message) {
    throw new Error(frameError + message);
  }
  
  function Frame(options) {
    if (!(this instanceof Frame)) {
      error("Frame is a constructor and should be called with the 'new' keyword");
    }
    return this._init(options);
  }
  
  /* */
  
  var emptyObject = Object.freeze({});
  
  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef(x) {
    return x == null;
  }
  
  function isDef(x) {
    return x != null;
  }
  
  /**
   * Check if value is primitive.
   */
  function isPrimitive(value) {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      // $flow-disable-line
      typeof value === "symbol" ||
      typeof value === "boolean"
    );
  }
  
  return Frame;
});
