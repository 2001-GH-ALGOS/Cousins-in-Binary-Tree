

var isCousins = function (root, x, y) {
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let size = queue.length;
    let xExists = false;
    let yExists = false;
    
   //iterate through all nodes in the same level
    for (let i = 0; i < size; i += 1) {
      let node = queue.shift();

      if (node.val === x) xExists = true;
      if (node.val === y) yExists = true;
      
      //check if children nodes are x & y, and if they are, return false as they are siblings not cousins
      if (node.left !== null && node.right !== null) {
        if (node.left.val === x && node.right.val === y) return false;
        if (node.left.val === y && node.right.val === x) return false;
      }
      
      //populate the queue with the next level of nodes if they exist
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  
    //since we've previously checked for the possibility that x and y could be siblings, in this case,
    //if both x and y exists, we can be certain that they are cousins and not siblings.
    if (xExists && yExists) return true;
    
    //if only one of them exists, they are not cousins, hence return false
    else if (xExists || yExists) return false;
  }
  
  
  //when we finish iterating through the tree, if nothing is returned, we'd return false as x and y don't exist.
  return false;
};

/*
Time complexity O(n^2)
Space complexity O(n)
*/
