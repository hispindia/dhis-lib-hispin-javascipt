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
var array1 = [1,2];
var array2 = ["1","2"];
var array3 = [{name:"1",age:"2"},{gpa:100},[1,2]];
var emptyArray = [];
var obj1 = {name:"chameera",age:16,gpa:3.94};
var obj2 = {name:"chameera",age:16,academy:{gpa:3.99,class:"1st",subjects:["pmat","SE","BI"]}};
var func1 = function(){};
var func2 = function(){};

test('HIUtils.isString()', function () {
    ok(HIUtils.isString(str), 'passed..!');
    ok(HIUtils.isString(str + ""), 'passed..!');
    ok(HIUtils.isString(strObj), 'passed..!');
    ok(HIUtils.isString(''), 'passed..!');

    ok(!HIUtils.isString(num), 'passed..!');
    ok(!HIUtils.isString(numObj), 'passed..!');
});

test('HIUtils.isNumber()', function () {
    ok(HIUtils.isNumber(num), 'passed..!');
    ok(HIUtils.isNumber(numObj), 'passed..!');

    ok(!HIUtils.isNumber(str), 'passed..!');
    ok(!HIUtils.isNumber(str + ""), 'passed..!');
    ok(!HIUtils.isNumber(strObj), 'passed..!');
    ok(!HIUtils.isNumber(''), 'passed..!');
    ok(!HIUtils.isNumber(undef), 'passed..!');
    ok(!HIUtils.isNumber(nullVar), 'passed..!');
    ok(!HIUtils.isNumber('NaN'), 'passed..!');
    ok(!HIUtils.isNumber(NaN), 'passed..!');
    ok(!HIUtils.isNumber(2 / 0), 'passed..!');
});

test('HIUtils.isInt()', function () {
    ok(HIUtils.isInt(num), 'passed..!');
    ok(HIUtils.isInt(numObj), 'passed..!');

    ok(!HIUtils.isInt(float1), 'passed..!');
    ok(!HIUtils.isInt(str), 'passed..!');
    ok(!HIUtils.isInt(str + ""), 'passed..!');
    ok(!HIUtils.isInt(strObj), 'passed..!');
    ok(!HIUtils.isInt(''), 'passed..!');
});

test('HIUtils.isArray()', function () {
    ok(HIUtils.isArray([]), 'passed..!');
    ok(HIUtils.isArray([1]), 'passed..!');
    ok(HIUtils.isArray(new Array()), 'passed..!');
    ok(HIUtils.isArray(array3), 'passed..!');
    ok(HIUtils.isArray([{name:"1",age:"2"},{},[]]), 'passed..!');

    ok(!HIUtils.isArray(), 'passed..!');
    ok(!HIUtils.isArray({}), 'passed..!');
    ok(!HIUtils.isArray(nullVar), 'passed..!');
    ok(!HIUtils.isArray(undef), 'passed..!');
    ok(!HIUtils.isArray(17), 'passed..!');
    ok(!HIUtils.isArray(''), 'passed..!');
    ok(!HIUtils.isArray(true), 'passed..!');
});

test('HIUtils.isBoolean()', function () {
    ok(HIUtils.isBoolean(true), 'passed..!');
    ok(HIUtils.isBoolean(false), 'passed..!');

    ok(!HIUtils.isBoolean([]), 'passed..!');
    ok(!HIUtils.isBoolean([1]), 'passed..!');
    ok(!HIUtils.isBoolean(new Array()), 'passed..!');
    ok(!HIUtils.isBoolean(), 'passed..!');
    ok(!HIUtils.isBoolean({}), 'passed..!');
    ok(!HIUtils.isBoolean(nullVar), 'passed..!');
    ok(!HIUtils.isBoolean(undef), 'passed..!');
    ok(!HIUtils.isBoolean(17), 'passed..!');
    ok(!HIUtils.isBoolean(''), 'passed..!');
});

test('HIUtils.compare()', function () {
    ok(HIUtils.compare({},{}), 'passed..!');
    ok(HIUtils.compare(null,null), 'passed..!');
    ok(HIUtils.compare(undef,undef), 'passed..!');
    ok(HIUtils.compare(1,1), 'passed..!');
    ok(HIUtils.compare("",""), 'passed..!');
    ok(HIUtils.compare('',''), 'passed..!');
    ok(HIUtils.compare([],[]), 'passed..!');
    ok(HIUtils.compare(array3,array3), 'passed..!');
    ok(HIUtils.compare(func1,func2), 'passed..!');


    ok(!HIUtils.compare(new Object(),strObj), 'passed..!');
    ok(!HIUtils.compare(strObj,new String("hell")), 'passed..!');
});

test('HIUtils.clone()', function () {
    ok(HIUtils.compare({},HIUtils.clone({})), 'passed..!');
    ok(HIUtils.compare(new Object(),HIUtils.clone(new Object())), 'passed..!');
    ok(HIUtils.compare(obj1,HIUtils.clone(obj1)), 'passed..!');
    ok(HIUtils.compare(null,HIUtils.clone(null)), 'passed..!');
    ok(HIUtils.compare(obj2,HIUtils.clone(obj2)), 'passed..!');
    ok(HIUtils.compare(array3,HIUtils.clone(array3)), 'passed..!');
    ok(HIUtils.compare(num,HIUtils.clone(num)), 'passed..!');
    ok(HIUtils.compare(undef,HIUtils.clone(undef)), 'passed..!');
    ok(HIUtils.compare(str,HIUtils.clone(str)), 'passed..!');

    ok(!HIUtils.compare(array1,HIUtils.clone(array2)), '100 passed..!');
    ok(!HIUtils.compare(new Array(),HIUtils.clone(array3)), 'passed..!');
});