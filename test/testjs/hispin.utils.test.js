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
var obj2 = {name:null,age:16,academy:{gpa:3.99,class:"1st",subjects:["pmat","SE","BI"]}};
var func1 = function(){};
var func2 = function(){};

test('HIUtils.typeOf()', function() {
    ok(HIUtils.typeOf("")=="String", 'passed..!');
    ok(HIUtils.typeOf(12.0)=="Number", 'passed..!');
    ok(HIUtils.typeOf(new Object())=="Object", 'passed..!');
    ok(HIUtils.typeOf(function(){})=="Function", 'passed..!');
    ok(HIUtils.typeOf(false)=="Boolean", 'passed..!');
    ok(HIUtils.typeOf(null)=="Null", 'passed..!');
    ok(HIUtils.typeOf(undefined)=="Undefined", 'passed..!');
    ok(HIUtils.typeOf([])=="Array", 'passed..!');

    ok(HIUtils.typeOf(12.0)!="String", 'passed..!');
    ok(HIUtils.typeOf(new Object())!="String", 'passed..!');
    ok(HIUtils.typeOf(function(){})!="String", 'passed..!');
    ok(HIUtils.typeOf(false)!="String", 'passed..!');
    ok(HIUtils.typeOf(null)!="String", 'passed..!');
    ok(HIUtils.typeOf(undefined)!="String", 'passed..!');
    ok(HIUtils.typeOf([])!="String", 'passed..!');
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

    ok(!HIUtils.isInt(0/0), 'passed..!');
    ok(!HIUtils.isInt(1/0), 'passed..!');
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