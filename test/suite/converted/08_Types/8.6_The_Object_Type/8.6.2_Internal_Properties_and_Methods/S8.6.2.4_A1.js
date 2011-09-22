// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the [[HasProperty]] method of O is called with property name P and if O has a property with name P, return true
 *
 * @section 8.6.2.4, 12.6.4
 * @path 08_Types/8.6_The_Object_Type/8.6.2_Internal_Properties_and_Methods/S8.6.2.4_A1.js
 * @description Try find existent property of any Object
 */

var __obj={fooProp:"fooooooo"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!("fooProp" in __obj)) {
  $ERROR('#1: var __obj={fooProp:"fooooooo"}; "fooProp" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////
