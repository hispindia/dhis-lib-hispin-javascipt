/**
 * Created by flaterrr <chameera9019@gmail.com> on 3/14/2016.
 */

var str = "hello";
var strObj = new String("hello");
var num = 123;
var float1 = 123.123;
var numObj = new Number(123);
var undef = undefined;
var nullVar = null;
var arrayObj = new Array();
var array1 = [1, 2];
var array2 = ["1", "2"];
var array3 = [{name: "1", age: "2"}, {gpa: 100}, [1, 2]];
var emptyArray = [];
var emptyObject = {};
var obj1 = {name: "chameera", age: 16, gpa: 3.94};
var obj2 = {name: null, age: 16, academy: {gpa: 3.99, class: "1st", subjects: ["pmat", "SE", "BI"]}};
var func1 = function () {
};
var func2 = function () {
    return true;
};
var boolean1 = new Boolean();

test('HIUtils.typeOf()', function () {
    ok(HIUtils.typeOf("") == "String", 'passed..!');
    ok(HIUtils.typeOf(12.0) == "Number", 'passed..!');
    ok(HIUtils.typeOf(new Object()) == "Object", 'passed..!');
    ok(HIUtils.typeOf(function () {
    }) == "Function", 'passed..!');
    ok(HIUtils.typeOf(false) == "Boolean", 'passed..!');
    ok(HIUtils.typeOf(null) == "Null", 'passed..!');
    ok(HIUtils.typeOf(undefined) == "Undefined", 'passed..!');
    ok(HIUtils.typeOf([]) == "Array", 'passed..!');
    ok(HIUtils.typeOf(boolean1) == "Boolean", 'passed..!');
    ok(HIUtils.typeOf(func1()) == "Undefined", 'passed..!');

    ok(HIUtils.typeOf(12.0) != "String", 'passed..!');
    ok(HIUtils.typeOf(new Object()) != "String", 'passed..!');
    ok(HIUtils.typeOf(function () {
    }) != "String", 'passed..!');
    ok(HIUtils.typeOf(false) != "String", 'passed..!');
    ok(HIUtils.typeOf(null) != "String", 'passed..!');
    ok(HIUtils.typeOf(undefined) != "String", 'passed..!');
    ok(HIUtils.typeOf([]) != "String", 'passed..!');
});

test('HIUtils.isInt()', function () {
    ok(HIUtils.isInt(num), 'passed..!');
    ok(HIUtils.isInt(numObj), 'passed..!');
    ok(HIUtils.isInt(10.0), 'passed..!');
    ok(HIUtils.isInt(0), 'passed..!');
    ok(HIUtils.isInt(0.0), 'passed..!');
    ok(HIUtils.isInt(-10), 'passed..!');
    ok(HIUtils.isInt(-0), 'passed..!');
    ok(HIUtils.isInt(+0), 'passed..!');

    ok(!HIUtils.isInt(0 / 0), 'passed..!');
    ok(!HIUtils.isInt(1 / 0), 'passed..!');
    ok(!HIUtils.isInt(Date()), 'passed..!');
    ok(!HIUtils.isInt("123"), 'passed..!');
    ok(!HIUtils.isInt(10.1), 'passed..!');
    ok(!HIUtils.isInt(0.01), 'passed..!');
    ok(!HIUtils.isInt(float1), 'passed..!');
    ok(!HIUtils.isInt(str), 'passed..!');
    ok(!HIUtils.isInt(str + ""), 'passed..!');
    ok(!HIUtils.isInt(strObj), 'passed..!');
    ok(!HIUtils.isInt(''), 'passed..!');
});

test('HIUtils.isPositiveInt()', function () {
    ok(HIUtils.isPositiveInt(num), 'passed..!');
    ok(HIUtils.isPositiveInt(numObj), 'passed..!');
    ok(HIUtils.isPositiveInt(10.0), 'passed..!');

    ok(!HIUtils.isPositiveInt(0), 'passed..!');
    ok(!HIUtils.isPositiveInt(0.0), 'passed..!');
    ok(!HIUtils.isPositiveInt(-10), 'passed..!');
    ok(!HIUtils.isPositiveInt(-0), 'passed..!');
    ok(!HIUtils.isPositiveInt(+0), 'passed..!');
    ok(!HIUtils.isPositiveInt(0 / 0), 'passed..!');
    ok(!HIUtils.isPositiveInt(1 / 0), 'passed..!');
    ok(!HIUtils.isPositiveInt(Date()), 'passed..!');
    ok(!HIUtils.isPositiveInt("123"), 'passed..!');
    ok(!HIUtils.isPositiveInt(10.1), 'passed..!');
    ok(!HIUtils.isPositiveInt(0.01), 'passed..!');
    ok(!HIUtils.isPositiveInt(float1), 'passed..!');
    ok(!HIUtils.isPositiveInt(str), 'passed..!');
    ok(!HIUtils.isPositiveInt(str + ""), 'passed..!');
    ok(!HIUtils.isPositiveInt(strObj), 'passed..!');
    ok(!HIUtils.isPositiveInt(''), 'passed..!');
});

test('HIUtils.compare()', function () {
    ok(HIUtils.compare({}, {}), 'passed..!');
    ok(HIUtils.compare(null, null), 'passed..!');
    ok(HIUtils.compare(undef, undef), 'passed..!');
    ok(HIUtils.compare(1, 1), 'passed..!');
    ok(HIUtils.compare("", ""), 'passed..!');
    ok(HIUtils.compare('', ''), 'passed..!');
    ok(HIUtils.compare([], []), 'passed..!');
    ok(HIUtils.compare(array3, array3), 'passed..!');
    ok(HIUtils.compare(func1, func2), 'passed..!');

    ok(!HIUtils.compare(new Object(), strObj), 'passed..!');
    ok(!HIUtils.compare(strObj, new String("hell")), 'passed..!');
});

test('HIUtils.clone()', function () {
    ok(HIUtils.compare({}, HIUtils.clone({})), 'passed..!');
    ok(HIUtils.compare(new Object(), HIUtils.clone(new Object())), 'passed..!');
    ok(HIUtils.compare(obj1, HIUtils.clone(obj1)), 'passed..!');
    ok(HIUtils.compare(null, HIUtils.clone(null)), 'passed..!');
    ok(HIUtils.compare(obj2, HIUtils.clone(obj2)), 'passed..!');
    ok(HIUtils.compare(array3, HIUtils.clone(array3)), 'passed..!');
    ok(HIUtils.compare(num, HIUtils.clone(num)), 'passed..!');
    ok(HIUtils.compare(undef, HIUtils.clone(undef)), 'passed..!');
    ok(HIUtils.compare(str, HIUtils.clone(str)), 'passed..!');

    ok(!HIUtils.compare(array1, HIUtils.clone(array2)), '100 passed..!');
    ok(!HIUtils.compare(new Array(), HIUtils.clone(array3)), 'passed..!');
});

test('HIUtils.isNull()', function () {
    ok(HIUtils.isNull(nullVar), 'passed..!');
    ok(HIUtils.isNull(null), 'passed..!');

    ok(!HIUtils.isNull(obj1), 'passed..!');
    ok(!HIUtils.isNull(str), 'passed..!');
    ok(!HIUtils.isNull(num), 'passed..!');
    ok(!HIUtils.isNull(array1), 'passed..!');
    ok(!HIUtils.isNull(0 / 0), 'passed..!');
    ok(!HIUtils.isNull(func1()), 'passed..!');
    ok(!HIUtils.isNull(undef), 'passed..!');
    ok(!HIUtils.isNull(emptyArray), 'passed..!');
    ok(!HIUtils.isNull(emptyObject), 'passed..!');
    ok(!HIUtils.isNull(func1()), 'passed..!');
    ok(!HIUtils.isNull(func2()), 'passed..!');
});

test('HIUtils.isUndefined()', function () {
    ok(HIUtils.isUndefined(undef), 'passed..!');
    ok(HIUtils.isUndefined(undefined), 'passed..!');
    ok(HIUtils.isUndefined(func1()), 'passed..!');

    ok(!HIUtils.isUndefined(obj1), 'passed..!');
    ok(!HIUtils.isUndefined(str), 'passed..!');
    ok(!HIUtils.isUndefined(num), 'passed..!');
    ok(!HIUtils.isUndefined(array1), 'passed..!');
    ok(!HIUtils.isUndefined(0 / 0), 'passed..!');
    ok(!HIUtils.isUndefined(null), 'passed..!');
    ok(!HIUtils.isUndefined(emptyArray), 'passed..!');
    ok(!HIUtils.isUndefined(emptyObject), 'passed..!');
    ok(!HIUtils.isUndefined(func2()), 'passed..!');
});

test('HIUtils.isNumber()', function () {
    ok(HIUtils.isNumber(num), 'passed..!');
    ok(HIUtils.isNumber(numObj), 'passed..!');
    ok(HIUtils.isNumber(float1), 'passed..!');
    ok(HIUtils.isNumber(123e5), 'passed..!');
    ok(HIUtils.isNumber(123e-5), 'passed..!');
    ok(HIUtils.isNumber(0 / 0), 'passed..!');
    ok(HIUtils.isNumber(1 / 0), 'passed..!');
    ok(HIUtils.isNumber(NaN), 'passed..!');
    ok(HIUtils.isNumber(Infinity), 'passed..!');

    ok(!HIUtils.isNumber(array1), 'passed..!');
    ok(!HIUtils.isNumber(obj1), 'passed..!');
    ok(!HIUtils.isNumber(emptyArray), 'passed..!');
    ok(!HIUtils.isNumber(emptyObject), 'passed..!');
    ok(!HIUtils.isNumber(func1()), 'passed..!');
    ok(!HIUtils.isNumber(func2()), 'passed..!');
    ok(!HIUtils.isNumber(nullVar), 'passed..!');
    ok(!HIUtils.isNumber(undef), 'passed..!');
});

test('HIUtils.isBoolean()', function () {
    ok(HIUtils.isBoolean(true), 'passed..!');
    ok(HIUtils.isBoolean(false), 'passed..!');
    ok(HIUtils.isBoolean(boolean1), 'passed..!');
    ok(HIUtils.isBoolean(func2()), 'passed..!');

    ok(!HIUtils.isBoolean(func2), 'passed..!');
    ok(!HIUtils.isBoolean(array1), 'passed..!');
    ok(!HIUtils.isBoolean(obj1), 'passed..!');
    ok(!HIUtils.isBoolean(emptyArray), 'passed..!');
    ok(!HIUtils.isBoolean(emptyObject), 'passed..!');
    ok(!HIUtils.isBoolean(func1()), 'passed..!');
    ok(!HIUtils.isBoolean(nullVar), 'passed..!');
    ok(!HIUtils.isBoolean(undef), 'passed..!');
});

test('HIUtils.isArray()', function () {
    ok(HIUtils.isArray(array1), 'passed..!');
    ok(HIUtils.isArray(array2), 'passed..!');
    ok(HIUtils.isArray(array3), 'passed..!');
    ok(HIUtils.isArray(emptyArray), 'passed..!');
    ok(HIUtils.isArray(arrayObj), 'passed..!');

    ok(!HIUtils.isArray(func2), 'passed..!');
    ok(!HIUtils.isArray(num), 'passed..!');
    ok(!HIUtils.isArray(obj1), 'passed..!');
    ok(!HIUtils.isArray(nullVar), 'passed..!');
    ok(!HIUtils.isArray(emptyObject), 'passed..!');
    ok(!HIUtils.isArray(func1()), 'passed..!');
    ok(!HIUtils.isArray(undef), 'passed..!');
    ok(!HIUtils.isArray(boolean1), 'passed..!');
});

test('HIUtils.sortArr()', function () {
    ok(HIUtils.isArray(HIUtils.sortArr(array1)), 'passed..!');
});