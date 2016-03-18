/**
 * Created by flaterrr <chameera9019@gmail.com> on 3/18/2016.
 */

var HIReports = HIReports || {};

/**
 * return the input filled with pad up to l length
 * @param i - input
 * @param l - output length
 * @param pad - padding
 * @returns {string}
 */
HIReports.leftPad = function (i, l, pad) {
    i = i.toString();
    if (HIUtils.isInt(l) && l >= i.length) {
        pad = pad.toString();
        while (i.length + pad.length < l) {
            pad += pad;
        }
        return pad.substr(0, l - i.length) + i;
    } else return i;
};

/**
 * return a string with years and months from given month to n months back
 * e.g. - ";201604;201603;201602;201601;201512;201511"
 * @param y - year
 * @param m - month
 * @param n - no of months
 * @returns {string}
 */
HIReports.genBackMonths = function (y, m, n) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += ";" + (y - Math.trunc((12 - (m - i)) / 12)) + "" + HIReports.leftPad((((m + 11) - i % 12) % 12 + 1), 2, 0);
    }
    return result;
};

/**
 * return array sorted according to the filter array
 * @param arr - array needed to be sorted
 * @param filter - should be an array
 * @returns {Array.<T>|*}
 */
HIReports.sortArrWithFilter = function (arr, filter) {
    var filterFunc = function (a, b) {
        for (i = 0; i < filter.length; i++) {
            if (a.startsWith(filter[i])) {
                if (b.startsWith(filter[i])) return a.localeCompare(b);
                return -1;
            }
            else if (b.startsWith(filter[i])) return 1;
        }
        return a.localeCompare(b);
    };
    //console.log(HIUtils.sortArr(arr,filterFunc));
    return HIUtils.sortArr(arr, filterFunc);
};
