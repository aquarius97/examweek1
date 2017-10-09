// 数组去重1
var arr = [1, 9, 9, 7, 0, 1, 3, 1];

function fn1(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}
console.log(fn1(arr));