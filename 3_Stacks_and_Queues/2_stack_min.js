// How would design a stack which, in addition to push and pop, has a function min 
// which returns the minimum element? Push, pop and min should operate in O(1) time.

var Stack = function (){
  this.min = null;
  this.storage = [];
}

var Node = function (value){
  this.value = value;
  this.lastMin = null;
}

Stack.prototype = Object.create(Stack.prototype);

Stack.prototype.add = function(value){
  var newNode = new Node(value);
  newNode.lastMin = this.min;
  if(value <= this.min || !this.min){
    this.min = value;
  } 
  this.storage.push(newNode);
}

Stack.prototype.pop = function(){
  const lastNode = this.storage[this.storage.length - 1];
  if(this.min === lastNode.value){
    this.min = lastNode.lastMin;
  }
  return this.storage.pop();
}

// Tests:
var stack = new Stack()

stack.add(5)
console.log(stack, {
  min: 5,
  storage: [
    {value: 5, lastMin: null}
  ]
});

stack.add(4)
console.log(stack, {
  min: 4,
  storage: [
    {value: 5, lastMin: null},
    {value: 4, lastMin: 5},
  ]
});

stack.add(1)
console.log(stack, {
  min: 1,
  storage: [
    {value: 5, lastMin: null},
    {value: 4, lastMin: 5},
    {value: 1, lastMin: 4},
  ]
});

stack.pop()
console.log(stack, {
  min: 4,
  storage: [
    {value: 5, lastMin: null},
    {value: 4, lastMin: 5}
  ]
});

stack.pop()
console.log(stack, {
  min: 5,
  storage: [
    {value: 5, lastMin: null}
  ]
});