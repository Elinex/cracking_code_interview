// Implement a function to check if a linked list is a palidrome

let LinkedList = function(value){
  this.value = value
  this.next = null
}

function isPalindrome(node){
  // edge case for node value is equal undefined
  if (node.value === undefined){
    return true;
  }

  let cur = node;
  let values = "";

  while(cur !== null){
    values += cur.value;
    cur = cur.next;
  }

  let reverse = "";
  for (let i = values.length - 1; i >= 0; i--){
    reverse += values[i];
  }

  console.log(values, reverse)

  if (values === reverse) {
    return true;
  } else {
    return false;
  }
}

// Tests
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

// console.log(isPalindrome(a), true);

var a = new LinkedList('a');
var b = new LinkedList('r');
var c = new LinkedList('a');
var d = new LinkedList('r');
var e = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// console.log(isPalindrome(a), true);

var a = new LinkedList('a');
var b = new LinkedList('r');
var c = new LinkedList('a');
var d = new LinkedList('r');

a.next = b;
b.next = c;
c.next = d;

// console.log(isPalindrome(a), false);

var a = new LinkedList('a');

// console.log(isPalindrome(a), true);

var a = new LinkedList();

console.log(isPalindrome(a), true);