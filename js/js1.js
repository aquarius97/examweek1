function fn1(r){for(var n=0;n<r.length;n++)for(var o=0;o<n;o++)r[n]===r[o]&&r.splice(n,1);return r}var arr=[1,9,9,7,0,1,3,1];console.log(fn1(arr));