/**
 * Created by flaterrr on 3/14/2016.
 */

var str = "hello";
var strObj = new String("hello");
var num = 123;
var float1 = 123.123;
var numObj = new Number(123);
var undef = undefined;
var nullVar = null;

test('isString()', function () {
    ok(isString(str), 'passed..!');
    ok(isString(str + ""), 'passed..!');
    ok(isString(strObj), 'passed..!');
    ok(isString(''), 'passed..!');

    ok(!isString(num), 'passed..!');
    ok(!isString(numObj), 'passed..!');
});

test('isNumber()', function () {
    ok(isNumber(num), 'passed..!');
    ok(isNumber(numObj), 'passed..!');

    ok(!isNumber(str), 'passed..!');
    ok(!isNumber(str + ""), 'passed..!');
    ok(!isNumber(strObj), 'passed..!');
    ok(!isNumber(''), 'passed..!');
    ok(!isNumber(undef), 'passed..!');
    ok(!isNumber(nullVar), 'passed..!');
    ok(!isNumber('NaN'), 'passed..!');
    ok(!isNumber(NaN), 'passed..!');
    ok(!isNumber(2 / 0), 'passed..!');
});

test('isInt()', function () {
    ok(isInt(num), 'passed..!');
    ok(isInt(numObj), 'passed..!');

    ok(!isInt(float1), 'passed..!');
    ok(!isInt(str), 'passed..!');
    ok(!isInt(str + ""), 'passed..!');
    ok(!isInt(strObj), 'passed..!');
    ok(!isInt(''), 'passed..!');
});

test('isArray()', function () {
    ok(isArray([]), 'passed..!');
    ok(isArray([1]), 'passed..!');
    ok(isArray(new Array()), 'passed..!');

    ok(!isArray(), 'passed..!');
    ok(!isArray({}), 'passed..!');
    ok(!isArray(nullVar), 'passed..!');
    ok(!isArray(undef), 'passed..!');
    ok(!isArray(17), 'passed..!');
    ok(!isArray(''), 'passed..!');
    ok(!isArray(true), 'passed..!');
});

test('isBoolean()', function () {
    ok(isBoolean(true), 'passed..!');
    ok(isBoolean(false), 'passed..!');

    ok(!isBoolean([]), 'passed..!');
    ok(!isBoolean([1]), 'passed..!');
    ok(!isBoolean(new Array()), 'passed..!');
    ok(!isBoolean(), 'passed..!');
    ok(!isBoolean({}), 'passed..!');
    ok(!isBoolean(nullVar), 'passed..!');
    ok(!isBoolean(undef), 'passed..!');
    ok(!isBoolean(17), 'passed..!');
    ok(!isBoolean(''), 'passed..!');
});

test('Object.equals()', function () {
    ok(Object.equals({},{}), 'passed..!');

    ok(!Object.equals(new Object(),strObj), 'passed..!');
});