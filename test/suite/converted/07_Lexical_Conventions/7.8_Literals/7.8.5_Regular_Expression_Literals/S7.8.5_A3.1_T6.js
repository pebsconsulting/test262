// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * RegularExpressionFlags :: IdentifierPart
 *
 * @section 7.8.5, 15.10.4.1
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.5_Regular_Expression_Literals/S7.8.5_A3.1_T6.js
 * @description IdentifierPart :: mig
 */

//CHECK#1
var regexp = /(?:)/mig; 
if (regexp.global !== true) {
  $ERROR('#1: var regexp = /(?:)/g; regexp.global === true. Actual: ' + (regexp.global));
}

//CHECK#2 
if (regexp.ignoreCase !== true) {
  $ERROR('#2: var regexp = /(?:)/g; regexp.ignoreCase === true. Actual: ' + (regexp.ignoreCase));
}

//CHECK#3
if (regexp.multiline !== true) {
  $ERROR('#3: var regexp = /(?:)/g; regexp.multiline === true. Actual: ' + (regexp.multiline));
}                            
