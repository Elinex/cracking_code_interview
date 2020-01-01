// Given a directed graph, design an algorithm to find out whether there is a 
// route between two nodes

var Queue = function(){
  this.storage = [];
  this.enqueue = function(node){
    this.storage.push(node)
  };
  this.dequeue = function(){
    return this.storage.pop()
  };
  this.isEmpty = function(){
    if(this.storage.length === 0){
      return true;
    } else {
      return false;
    }
  }
};

let checkRoutes = function(origin, destiny){
  let queue = new Queue();;
  queue.enqueue(origin);

  while(!queue.isEmpty()){
    let current = queue.dequeue();
    const children = current.children || 0;
    if(current.visited){
      return false;
    }
    current.visited = true;
    
    for(let i = 0; i < children.length; i++){
      if(children[i].value === destiny.value){
        return true
      } else {
        queue.enqueue(children[i])
      }
    }
  }

  return false;
}

// NOTE: do the tests one at a time

// // Test 1:
// let a = {value: 'a', children: null};
// let b = {value: 'b', children: null};
// let c = {value: 'c', children: null};
// let d = {value: 'd', children: null};

// a.children = [b,c];
// b.children = [d];
// console.log(checkRoutes(a,d), true);

// // Test 2:
// let a = {value: 'a', children: null};
// let b = {value: 'b', children: null};
// let c = {value: 'c', children: null};
// let d = {value: 'd', children: null};

// a.children = [b];
// b.children = [c];
// c.children = [d];
// console.log(checkRoutes(a,d), true);

// // Test 3:
// let a = {value: 'a', children: null};
// let b = {value: 'b', children: null};
// let c = {value: 'c', children: null};
// let d = {value: 'd', children: null};

// a.children = [b, c];
// b.children = [a];
// console.log(checkRoutes(a,d), false);

// // Test 4:
// let a = {value: 'a', children: null};
// let b = {value: 'b', children: null};
// let c = {value: 'c', children: null};
// let d = {value: 'd', children: null};
// let e = {value: 'e', children: null};
// let f = {value: 'f', children: null};
// let g = {value: 'g', children: null};

// a.children = [b, c];
// b.children = [d];
// c.children = [e];
// d.children = [g];
// e.children = [f];
// g.children = [e];
// console.log(checkRoutes(a,g), true);
// console.log(checkRoutes(a,f), true);
// console.log(checkRoutes(e,f), true);
// console.log(checkRoutes(b,c), false);
// console.log(checkRoutes(c,f), true);
