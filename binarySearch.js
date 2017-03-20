// binary search implementaion using javascript

var binary_search = function(array, low, high,  key) {
    if(low > high) {
        return -1
    }
    var mid = low + Math.floor((high-low)/2);
    console.log('mid', mid);
    if(key == array[mid]) {
        return mid;
    }
    else if( key < array[mid]) {
        return binary_search(array, low, (mid - 1), key);
    }
    else if(key > array[mid]) {
        return binary_search(array, (mid + 1), high, key);
    }
}


var temp = binary_search([1,2,3,4,5,6,7,], 0, 6, 3);
console.log(temp);
