<<<<<<< HEAD
// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   // add new element to stack
//   push(node) {
//     node.prev = this.top;
//     this.top = node;
//   }

//   // remove top element
//   pop() {
//     let a = this.top;
//     let b = a.prev;
//     a.prev = null;
//     this.top = b;
//     return a;
//   }

//   // return top;
//   peek() {
//     return this.top;
//   }

//   // checks stack is empty
//   isEmpty() {
//     return this.top === null;
//   }

//   print() {
//     const pri = (node) => {
//       if (node.prev) {
//         pri(node.prev);
//       }
//       console.log(node.value);
//     };
//     pri(this.top);
//   }
// }
=======
class Stack {
  constructor() {
    this.top = null;
  }
 push(node) {
    node.prev = this.top;
    this.top = node;
  }
  pop() {
    let a = this.top;
    let b = a.prev;
    a.prev = null;
    this.top = b;
    return a;
  }
  peek() {
    return this.top;
  }
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
>>>>>>> 93721721be9d086941d1d56d312d82d58f2e0c76

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//   }
// }

// const stack = new Stack();

// const n1 = new Node(10);
// const n2 = new Node(11);
// const n3 = new Node(12);
// const n4 = new Node(13);

// stack.push(n3);
// stack.push(n1);
// stack.push(n2);
// stack.push(n4);
// stack.pop();
// // stack.print() // 12 10 11
// stack.pop();
// stack.print(); // 12 10
// // console.log(stack.peek()); // 10
// const reverseString = (str) => {
//   const stack = new Stack();
//   for (const letter of str) {
//     stack.push(new Node(letter));
//   }
//   let rev = "";
//   while (!stack.isEmpty()) {
//     rev += stack.pop().value;
//   }
//   return rev;
// };
// console.log(reverseString("keep"));
const search = (nums, target) => {
  let low = 0;
  let high = nums.length;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      console.log("mid", mid);
      return mid;
    } else if (nums[mid] < target) {
      console.log("low", (low = mid + 1));
      return (low = mid + 1);
    } else {
      console.log("high", (high = mid - 1));
      return (high = mid - 1);
    }
  }
  return -1;
};
// const binarySearch = (list, item) => {
//   let low = 0;
//   let high = list.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const guess = list[mid];
//     if (guess === item) {
//       return mid;
//     }
//     if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return null;
// };
search([-1, 0, 3, 5, 9, 12], 2);
