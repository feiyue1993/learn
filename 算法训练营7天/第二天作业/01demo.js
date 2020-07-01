/*
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 */

/*
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let output = [];
    let stack = [root];
    let node = null;

    while(node = stack.pop()){
        output.push(node.val);
        stack.push(...node.children.reverse());
    }

    return output;
};
