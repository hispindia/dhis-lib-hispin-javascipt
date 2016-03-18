/**
 * Created by flaterrr <chameera9019@gmail.com> on 3/18/2016.
 */

test('HIReports.leftPad()', function () {
    ok(HIReports.leftPad(15, 4, "*") === "**15", 'passed..!');
});

test('HIReports.genBackMonths()', function () {
    ok(HIReports.genBackMonths(2016, 4, 6) === ";201604;201603;201602;201601;201512;201511", 'passed..!');
});

test('HIReports.sortArrWithFilter()', function () {
    var filterArr = ['K', 'H', 'C', 'B'];
    ok(HIReports.sortArrWithFilter(['Blue', 'Humpback', 'Beluga', 'Chameera', 'Humpbacl', 'Kenya'], filterArr), 'passed..!');
});