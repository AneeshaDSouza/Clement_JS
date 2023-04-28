function validateBst(tree) {
    // Write your code here.
      return validateBstHelper(tree, -Infinity, Infinity);
      
  }
  
  function validateBstHelper(tree,minValue, maxValue){
      if( tree === null) return true;
      if(tree.value <minValue || tree.value>= maxValue) return false;
      const leftIsValid = validateBstHelper(tree.left, minValue,tree.value );
      return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
      
  }

  var isValidBST = function(node, min = null, max = null) {
    if (!node) return true;
    if (min && node.val <= min.val) return false;
    if (max && node.val >= max.val) return false;
    return isValidBST(node.left, min, node) && isValidBST(node.right, node, max);
};

//3
var isValidBST = function(tree) {
    return validateBstHelper(tree, -Infinity, Infinity);
   
}

function validateBstHelper(tree,minValue, maxValue){
   if( tree === null) return true;
   if(tree.val <=minValue || tree.val>= maxValue) return false;
   const leftIsValid = validateBstHelper(tree.left, minValue,tree.val );
   return leftIsValid && validateBstHelper(tree.right, tree.val, maxValue);
   
}

//solution 4
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(node, min = null, max = null) {
   if (!node) return true;
      if (min && node.value < min.value) return false;
      if (max && node.value >= max.value) return false;
      return validateBst(node.left, min, node) && validateBst(node.right, node, max);
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;