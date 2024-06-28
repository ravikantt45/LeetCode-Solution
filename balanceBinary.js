
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const balanceBST = (root) => {
  
    const inorderTraversal = (node, arr) => {
        if (!node) return;
        inorderTraversal(node.left, arr);
        arr.push(node.val);
        inorderTraversal(node.right, arr);
    };

  
    const buildBalancedBST = (arr, start, end) => {
        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(arr[mid]);
        node.left = buildBalancedBST(arr, start, mid - 1);
        node.right = buildBalancedBST(arr, mid + 1, end);
        return node;
    };


    const values = [];
    inorderTraversal(root, values);


    return buildBalancedBST(values, 0, values.length - 1);
};

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(4);

const balancedRoot = balanceBST(root);


const printTree = (node) => {
    if (!node) return;
    console.log(node.val);
    printTree(node.left);
    printTree(node.right);
};
