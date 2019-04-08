// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};
_.typeOf = function(value) {
    if(value === null) 
        return "null";
    else if (value === undefined) 
        return "undefined";
    else if(typeof value === 'string') 
        return "string";
    else if(typeof value === "number") 
        return "number";
    else if(typeof value === "boolean")
        return "boolean";
    else if(Array.isArray(value) === true) 
        return "array";
    else if(typeof value === 'object')
        return "object";
    else
        return "function";
};
_.first = function(array, number) {
    var toRet = [];
    
    if(Array.isArray(array) === false) {
        return toRet;
    }
    else if(typeof number !== "number") {
        return array[0];
    }
    else if(number > array.length) {
        return array;
    }
    else {
        for(var i = 0; i < number; i++) {
            toRet.push(array[i]);
        }
    }
    
    return toRet;
};


_.last = function(array,number) {
  var toRet = [];
    
    if(Array.isArray(array) === false) {
        return toRet;
    }
    else if(typeof number !== "number") {
        return array[array.length-1];
    }
    else if(number > array.length) {
        return array;
    }
    else if(number < 0) {
        return toRet;
    }
    else {
        var start = array.length - number;
        for(var g = start; g < array.length; g++) {
            toRet.push(array[g]);
        }
        
    }
    return toRet;
    
};


_.indexOf = function(array,value) {
        var index = -1;
       var found = false;
       if(Array.isArray(array) === false) {
           return -1;
       }
       else {
           for(var b = 0; b < array.length; b++) {
               if(found === false && value === array[b]) {
                   index = b;
                   break;
               }
           }
       }
       return index;
};


_.contains = function(array,value) {
  var found = false;
    for(var f = 0; f < array.length; f++) {
        if(array[f] === value) {
            found = true;
        }
    }
    return found;
};


_.each = function(collection, func) {
    if(Array.isArray(collection) === true) {
        for(var k = 0; k < collection.length; k++) {
            func(collection[k], k, collection);
        }
    }
    else {
        for(var key in collection) {
            func(collection[key], key, collection);
        }
    }
    
};


_.filter = function(arr, func) {
    var ret = [];
  for(var f = 0; f < arr.length; f++) {
      if(func(arr[f], f, arr) === true) {
          ret.push(arr[f]);
      }
  }
  return ret;
};


_.map = function(collection, func) {
    var toRet = [];
  if(Array.isArray(collection) === true) {
      for(var s = 0; s < collection.length; s++) {
          toRet.push(func(collection[s], s, collection));
      }
  }  
  else {
      for(var key in collection) {
          toRet.push(func(collection[key], key, collection));
      }
      
  }
  return toRet;
};
_.reject = function(arr, func) {
    var ret = [];
    var toRet = [2,4];
  _.filter(arr,func);
  
  for(var i = 0; i < arr.length; i++) {
      for(var k = 0; k < ret.length; k++) {
          var found = false;
          if(arr[i] == ret[k]) {
              found = false;
          }
          if(!found) {
              toRet.push(arr[i]);
          }
      }
  }
  
  return toRet;
};           
_.partition = function(arr,func) {
    var toRet = [[],[]];
    for(var d = 0; d < arr.length; d++) {
        if(func(arr[d], d, arr)) {
            toRet[0].push(arr[d]);
        }
        else {
            toRet[1].push(arr[d]);
        }
    }
    return toRet;
};
_.every = function(coll, func) {
    if (func === undefined) {
        func = function (val, entry, col) {
            return val;
        };
    
    }
    let res = true;
    let gather = function (val, entry, col) {
        if(!func(val, entry, col)) {
            res = false 
        }
    };
    _.each (coll, gather);
    return res;
    
};
_.some = function(collection, func) {
    if (func === undefined) {
        func = function (val, entry, col) {
            return val;
        };
    
    }
    let res = false;
    let gather = function (val, entry, col) {
        if(func(val, entry, col) === true) {
            res = true 
        }
    };
    _.each (collection, gather);
    return res;
    
    
};          
_.pluck = function(array, prop) {
    var arr = [];
    arr = _.map(array,check);
    function check(value, i ) {
        return array[i][prop];
    }
    return arr;
};             


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
    module.exports.identity = _.identity;
    module.exports.typeOf = _.typeOf;
    module.exports.first = _.first;
    module.exports.last = _.last;
    module.exports.indexOf = _.indexOf;
    module.exports.contains = _.contains;
    module.exports.each = _.each;
    module.exports.unique = _.unique;
    module.exports.filter = _.filter;
    module.exports.reject = _.reject;
    module.exports.partition = _.partition;
    module.exports.map = _.map;
    module.exports.pluck = _.pluck;
    module.exports.every = _.every;
    module.exports.some = _.some;
    module.exports.reduce = _.reduce;
    module.exports.extend = _.extend;
    
    }
