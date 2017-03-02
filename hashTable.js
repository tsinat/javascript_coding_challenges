// implementaion of hashtable using javascript

function HashTable(size) {
    this.buckets = new Array(size);
    this.numBucket = this.buckets.length;
}

function HashNode = function(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

var myHT = new HashTable(30);
console.log(myHT);
