// class Node {
//   constructor(val) {
//       this.left = null;
//       this.right = null;
//   }
// }
function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function createTree() {
  let root = new TreeNode(10);

  root.left = new TreeNode(20);
  root.right = new TreeNode(30);

  root.left.left = new TreeNode(40);
  root.left.right = new TreeNode(50);

  root.right.left = new TreeNode(60);
  root.right.right = new TreeNode(70);

  root.left.left.right = new TreeNode(80);
  return root;
}
function preOrder(root) {
  if (root === null) return;

  // print the node data
  console.log(root.data);

  // goto left
  preOrder(root.left);

  // goto right
  preOrder(root.right);
}
createTree();
preOrder();
// const inOrder = (root) => {
//   console.log(root.data);
//   inOrder(root.left);
//   inOrder(root.right);
// };
// inOrder();
// createTree();

// inOrder() {
//     let visited = [],
//         current = this.root;

//     let traverse = node => {
//       if (node.left) traverse(node.left);
//       visited.push(node.val);
//       if (node.right) traverse(node.right);
//     };

//     traverse(current);
//     return visited;
//   }

//   console.log(tree.inOrder()); // [ 3, 9, 11, 14, 19, 20, 31, 57, 62, 72 ]
