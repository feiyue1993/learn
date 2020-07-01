/*
 *  给定一个二叉树，返回它的 前序 遍历。
 */

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let output = [];
    let stack = [root];
    let node = null;

    while(node=stack.pop()){
        output.push(node.val);
        node.right? stack.push(node.right): void(0);
        node.left? stack.push(node.left): void(0);
    }

    return output;
};
