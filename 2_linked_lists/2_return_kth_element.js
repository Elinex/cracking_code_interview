// Implement an algorithm to find the kth to last element of a singly linked list.

function findElement(head, target){
  let cur = head
  while(cur !== null){
    if(cur.value === target){
      return cur
    }
    cur = cur.next
  }
  return null
}

//  Tests
var linkedList = function(value) {
  this.value = value;
  this.next = null;
};
var a = new linkedList(1);
var b = new linkedList(2);
var c = new linkedList(3);
var d = new linkedList(4);
var e = new linkedList(5);
var f = new linkedList(6);
var g = new linkedList(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
console.log(findElement(a, 3));  // 3,4,5,6,7
console.log(findElement(a, 10)); // 
console.log(findElement(a, -1)); // 
console.log(findElement(a, 0));  // 
console.log(findElement(a, 1));  // 1,2,3,4,5,6,7