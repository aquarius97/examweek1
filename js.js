// 数组去重
var arr = [1, 9, 9, 7, 0, 1, 3, 1];

function fn(arr) {
    var brr = [];
    for (var i = 0; i < arr.length; i++) {
        if (brr.indexOf(arr[i]) === -1) {
            brr.push(arr[i]);
        }
    }
    return brr;
}
console.log(fn(arr));