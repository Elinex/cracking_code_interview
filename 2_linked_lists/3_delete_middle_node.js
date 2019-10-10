// Implement an algorithm to delete a node in the middle (any node but the first and last node)
// of a singled linked list, given only access to that node.

function deleteMiddle(middle, head){
  if (!checkHeadAndTail(middle, head)){
    let cur = head
    while (cur !== null){
      if (cur.value === middle.value){
        cur.value = cur.next.value
        cur.next = cur.next.next
        return head
      }
      cur = cur.next
    }
  }
  return head
}

function checkHeadAndTail(middle, head){
  if (head.value === middle.value){
    return true
  }
  let cur = head
  while (cur !== null){
    if(cur.next === null && cur.value === middle.value){
      return true
    }
    cur = cur.next
  }
  return false
}

// Tests
var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(deleteMiddle(c, a))