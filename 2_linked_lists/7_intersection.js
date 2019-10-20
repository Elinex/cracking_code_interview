// given two (singly) linked lists, determine if the two lists intersect. Return the
// intersection node. 

let LinkedList = function(value){
  this.value = value
  this.next = null
}

function intersection(nodeA, nodeB){
  let curA = nodeA;
  let intersection = null;

  while(curA !== null){
    let curB = nodeB;
    while(curB !== null){
      if (curB.next === curA){
        intersection = curA;
        return intersection;
      }
      curB = curB.next;
    }
    curA = curA.next;
  }
  return intersection;
}

// Tests
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

var intersectNode = intersection(a, a1);

console.log(intersectNode); // d