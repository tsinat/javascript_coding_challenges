//hashtable implementaion  using javascript

function HashTable(size) {
    this.buckets = new Array(size);
    this.numBucket = this.buckets.length;
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key) {
    var total = 0;
    for(var i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    var bucket = total % this.numBucket;
    return bucket;
}

HashTable.prototype.insert = function(key, value) {
    var index = this.hash(key);
    if(!this.buckets[index]) {
        this.buckets[index] = new HashNode(key, value);
    }
    else if(this.buckets[index].key === key) {
        this.buckets[index].value = value
    }
    else {
        var currentNode = this.buckets[index];
        while(currentNode.next) {
            if(currentNode.next.key === key) {
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new HashNode(key, value);
    }
}

HashTable.prototype.get = function(key) {
    var index = this.hash(key);
    if(!this.buckets[index]) {
        return null;
    }
    else {
        var currentNode = this.buckets[index];
        while(currentNode) {
            if(currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

HashTable.prototype.retrieveAll = function() {
    var arrayBucket = [];
    for(var i = 0; i < this.numBucket; i++) {
        if(this.buckets[i]) {
            var currentNode = this.buckets[i];
            if(!currentNode.next){
                arrayBucket.push(currentNode);
            }
            else {
                while(currentNode.next) {
                    arrayBucket.push(currentNode);
                    currentNode = currentNode.next;
                }
            }
        }
    }
    return arrayBucket;
}

var myHT = new HashTable(30);
myHT.insert('tsinat', 'cheru87@gmail.com')
myHT.insert('tsinat', 'tsinatzeree@gmail.com')
myHT.insert('cheru', 'tsinatzeree@gmail.com')
console.log(myHT.retrieveAll());
