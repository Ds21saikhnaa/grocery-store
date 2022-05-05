class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const inorder = (node) => {
  if (node === null) return;
  inorder(node.left);
  console.log(node.value);
  // visit(node);
  inorder(node.right);
};
const preorder = (node) => {
  if (node === null) return;
  console.log(node.value);
  // visit(node);
  preorder(node.left);
  preorder(node.right);
};
const postorder = (node) => {
  if (node === null) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
  // visit(node);
};
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
inorder();
// var invertTree = function (root) {
//   if (root) {
//     invert(root);
//     invertTree(root.left);
//     invertTree(root.right);
//   }
//   return root;
// };
// const invert = (node) => {
//   const left = node.left;
//   node.left = node.right;
//   node.right = left;
// };
// //dasdas
// var findTilt = function (root) {
//   tilt = 0;
//   postOrder(root);
//   return tilt;
// };
// const postOrder = (root) => {
//   if (root == undefined) {
//     return 0;
//   }
//   let l = postOrder(root.left);
//   let r = postOrder(root.right);
//   tilt += Math.abs(r - l);
//   return root.val + l + r;
// };
var isBalanced = function (root) {
  const bool = (root) => {
    if (!root) return true;
    const left = bool(root.left);
    const right = bool(root.right);
    if (left === false || right === false || Math.abs(left - right) > 1)
      return false;
    return 1 + Math.max(left, right);
  };
  return bool(root);
};
