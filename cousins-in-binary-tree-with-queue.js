var isCousins = function (root, x, y) {
  let queue = [root, 'stop'];
    let xExists = false;
    let yExists = false;
  while (queue.length) {
      let node = queue.shift();
      if(node !== 'stop'){
          if (node.val === x) xExists = true;
          if (node.val === y) yExists = true;
          
          if (node.left !== null && node.right !== null) {
            if (node.left.val === x && node.right.val === y) return false;
            if (node.left.val === y && node.right.val === x) return false;
      }
          if (node.left !== null) queue.push(node.left);
          if (node.right !== null) queue.push(node.right);
      }else{
         if(xExists && yExists){
             return true
         }
          
          xExists = false
          yExists = false
   
          if(queue.length === 0){
              break
          }
          queue.push(node)
      }
  }
  return false;
};


/*
Time complexity O(n) 
Space complexity O(n) 
*/
