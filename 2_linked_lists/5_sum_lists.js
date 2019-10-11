// Write a function that adds two numbers and returns the sum as a linked list.
// The two numbers are represented by a linked lit, where each node contains a single digit. 
// The digits are stored in reverse order, such that the 1's digit is at the head of the list.

let LinkedList = function(value){
  this.value = value
  this.next = null
}

function sumLists(nodeA, nodeB){
  const numA = nodeToNum(nodeA)
  const numB = nodeToNum(nodeB)
  const sum = (numA + numB).toString()

  let node = new LinkedList(Number(sum[sum.length - 1]))
  let cur = node
  let i = sum.length - 2
  while (i >= 0){
    cur.next = new LinkedList(Number(sum[i]))
    cur = cur.next
    i--
  }
  return node
}

function nodeToNum(node){
  let str = ""
  let cur = node
  while(cur !== null){
    str = cur.value + str
    cur = cur.next
  }
  return Number(str)
}

// Tests
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). this case refers to 617 + 295
// Output: 2 -> 1 -> 9. the answer refers to 912
var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);
a.next = b;
b.next = c;
var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2);
d.next = e;
e.next = f;
var newHead = sumLists(a, d);
console.log(newHead);

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 9). this case refers to 617 + 995
// Output: 2 -> 1 -> 6 -> 1. the answer refers to 1612
var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(6);
a.next = b;
b.next = c;
var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(9);
d.next = e;
e.next = f;
var newHead = sumLists(a, d);
console.log(newHead);