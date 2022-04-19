class Stack {
  constructor() {
    this.top = null;
  }

  // add new element to stack
  push(node) {
    node.prev = this.top;
    this.top = node;
    // const newNode = new Node(node);
    // newNode.next = this.top;
    // this.top = newNode;
  }

  // remove top element
  pop() {
    let a = this.top;
    let b = a.prev;
    a.prev = null;
    this.top = b;
    return a;
  }

  // return top;
  peek() {
    return this.top;
    // if (this.isEmpty()) return undefined;
    // return this.top.value;
  }

  // checks stack is empty
  isEmpty() {
    return this.top === null;
  }

  print() {
    const pri = (node) => {
      if (node.prev) {
        pri(node.prev);
      }
      console.log(node.value);
    };
    pri(this.top);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

const stack = new Stack();

const n1 = new Node(10);
const n2 = new Node(11);
const n3 = new Node(12);
const n4 = new Node(13);

stack.push(n3);
stack.push(n1);
stack.push(n2);
stack.push(n4);
stack.pop();
// stack.print() // 12 10 11
stack.pop();
stack.print(); // 12 10
// console.log(stack.peek()); // 10
const reverseString = (str) => {
  const stack = new Stack();
  for (const letter of str) {
    stack.push(new Node(letter));
  }
  let rev = "";
  while (!stack.isEmpty()) {
    rev += stack.pop().value;
  }
  return rev;
};
console.log(reverseString("keep"));
