/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

//using object to store child and parent vals
var isCousins = function (root, x, y) {
  let childrenNodes = {};
  let allNodes = [root, 'stop'];
  while (allNodes.length > 1) {
    let remove = allNodes.shift();
    if (remove !== 'stop') {
      if (remove.left) {
        childrenNodes[remove.left.val] = remove.val;
        allNodes.push(remove.left);
      }
      if (remove.right) {
        childrenNodes[remove.right.val] = remove.val;
        allNodes.push(remove.right);
      }
    } else {
      allNodes.push(remove);
      if (
        Object.keys(childrenNodes).includes(x.toString()) &&
        Object.keys(childrenNodes).includes(y.toString())
      ) {
        if (childrenNodes[x] !== childrenNodes[y]) {
          return true;
        }
      }
      childrenNodes = {};
    }
  }
  return false;
};
