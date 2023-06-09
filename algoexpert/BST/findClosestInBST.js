//o(logn) time | o(1) space
//worst: o(n) time | o(1) space

function findClosestValueInBst(tree, target) {
    // Write your code here.
    return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
    let currentNode = tree;
    while (currentNode != null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }

    }
    return closest;
}
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }


}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;