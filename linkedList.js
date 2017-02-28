// javascript implementation of LinkedList
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.prev = previous;

}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  var val = this.tail;
  this.tail = this.tail.prev
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

var ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
ll.addToTail(400);


console.log(ll.removeHead());
