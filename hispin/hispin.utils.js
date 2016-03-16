/**
 * Created by nhancao on 3/11/16.
 */

var HIUtils = {};

/**
 * return the type of any variable
 * e.g. - function will return 'Number' for both primitive and object type numbers
 * possible return values - 'Undefined', 'Null', 'Number', 'String', 'Array', 'Object', 'Function'
 * @param arg
 * @returns {string}
 */
HIUtils.typeOf = function (arg) {

    try {
        var type = Object.prototype.toString.call(arg);
        return type.substring(type.search(" ") + 1, type.length - 1);
    } catch (e) {
        return undefined;
    }
};

/**
 * return true for only primitive and object type numbers which are safe integers defined in javascript
 * no strings contain integers are passed
 * Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER in JS are the boundaries
 * @param arg
 * @returns {boolean}
 */
HIUtils.isInt = function (arg) {
    try {
        if (HIUtils.typeOf(arg) == 'Number') return Number.isSafeInteger(Number(arg));
    } catch (e) {
        return false;
    }
};

/**
 * only positive integers, no zeros
 * @param arg
 * @returns {boolean}
 */
HIUtils.isPositiveInt = function (arg) {
    try {
        return HIUtils.isInt(arg) && arg > 0;
    } catch (e) {
        return false;
    }
};

/**
 * able to compare strings,numbers,null,undefined,objects,arrays
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
 * able to clone strings,numbers,null,undefined,objects,arrays
 * @param obj
 * @returns {clone}
 */
HIUtils.clone = function (src) {
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