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
  let valObj = {};
  let allNodes = [root, 'stop'];

  while (allNodes.length > 1) {
    let remove = allNodes.shift();
    if (remove !== 'stop') {
      if (remove.left) {
        valObj[remove.left.val] = remove.val;
        allNodes.push(remove.left);
      }
      if (remove.right) {
        valObj[remove.right.val] = remove.val;
        allNodes.push(remove.right);
      }
    } else {
      if (valObj[x] && valObj[y]) {
        if (valObj[x] !== valObj[y]) {
          return true;
        }
      }
      allNodes.push(remove);
      valObj = {};
    }
  }
  return false;
};
