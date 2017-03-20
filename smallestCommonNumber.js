// smallest common number from 3 different arrays

var smallest_common_number = function(a, b, c) {
    var i = 0,
        j = 0,
        k = 0;
    while(i < a.length && j < b.length && k < c.length) {
        if((a[i] === b[j]) && (b[j] === c[k])) {
            return a[i];
        }
        else if(a[i] <= b[j] && a[j] <= c[k]) {
            i++
        }
        else if(b[j] <= a[i] && b[j] <= c[k]) {
            j++
        }
        else if(c[k] <= a[i] && c[k] <= b[j]) {
            k++
        }
    }
    return -1;
}

var temp = smallest_common_number([4,5,6,6], [1,5,6,7], [6]);
console.log('temp:', temp);
