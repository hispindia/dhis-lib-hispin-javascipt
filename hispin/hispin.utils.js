/**
 * Created by nhancao on 3/11/16.
 */

var HIUtils = {};

/**
 * return true for string values and string objects
 * @param arg
 * @returns {boolean}
 */
HIUtils.isString = function (arg) {

    try {
        return Object.prototype.toString.call(arg) == '[object String]';
    } catch (e) {
        return false;
    }
};

/**
 * return true for number values and number objects
 * @param arg
 * @returns {boolean}
 */
HIUtils.isNumber = function (arg) {
    try {
        return (!(arg === Infinity) && Object.prototype.toString.call(arg) == '[object Number]' && !isNaN(arg));
        //return false;
    } catch (e) {
        return false;
    }
};

/**
 * return true for integer values and integer objects
 * @param arg
 * @returns {*}
 */
HIUtils.isInt = function (arg) {
    try {
        return HIUtils.isNumber(arg) && Number.isInteger(Number(arg));
    } catch (e) {
        return false;
    }
};

/**
 * return true for arrays
 * @param arg
 * @returns {boolean}
 */
HIUtils.isArray = function (arg) {
    try {
        return Object.prototype.toString.call(arg) === '[object Array]';
    } catch (e) {
        return false;
    }
};

/**
 * return true for booleans
 * @param arg
 * @returns {boolean}
 */
HIUtils.isBoolean = function (arg) {
    try {
        return Object.prototype.toString.call(arg) == '[object Boolean]';
    } catch (e) {
        return false;
    }
};

/**
 *
 * @param x
 * @param y
 * @returns {boolean}
 */
HIUtils.compare = function (x, y) {
    try {
        if (x === y) return true;
        // if both x and y are null or undefined and exactly the same

        if (!( x instanceof Object ) || !( y instanceof Object )) return false;
        // if they are not strictly equal, they both need to be Objects

        if (x.constructor !== y.constructor) return false;
        // they must have the exact same prototype chain, the closest we can do is
        // test there constructor.

        for (var p in x) {
            if (!x.hasOwnProperty(p)) continue;
            // other properties were tested using x.constructor === y.constructor

            if (!y.hasOwnProperty(p)) return false;
            // allows to compare x[ p ] and y[ p ] when set to undefined

            if (x[p] === y[p]) continue;
            // if they have the same strict value or identity then they are equal

            if (typeof( x[p] ) !== "object") return false;
            // Numbers, Strings, Functions, Booleans must be strictly equal

            if (!HIUtils.compare(x[p], y[p])) return false;
            // Objects and Arrays must be tested recursively
        }

        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
            // allows x[ p ] to be set to undefined
        }
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * able to compare strings,numbers,null,undefined,objects,arrays
 * @param obj
 * @returns {*}
 */
/*
HIUtils.cloneObj = function (obj){

    return JSON.parse(JSON.stringify(obj));
    //return Object.assign({}, obj);
};
*/

/**
 * able to clone strings,numbers,null,undefined,objects,arrays
 * @param obj
 * @returns {*}
 */
HIUtils.clone = function (src){
    var clone;
    try {
        // check src is reference type of primitive
        if (typeof src == 'object') {
            if (src == null) return null;

            //create object with same prototype
            clone = Object.create(Object.getPrototypeOf(src));

            //assign src properties
            for (var p in src) {
                if (typeof src[p] == 'object') clone[p] = HIUtils.clone(src[p]);
                else {
                    clone[p] = src[p];
                }
            }
        } else {
            // primitive values can be assigned directly
            clone = src;
        }
        return clone;
    } catch (e) {
        return clone;
    }
};