function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function BST(){
    this.root = null;
}

BST.prototype.insert = function(val){
    if (!this.root) this.root = new Node(val);
    else{
        var runner = this.root;
        while (runner){
            if (val < runner.value){
                if (!runner.left){
                    runner.left = new Node(val);
                    break;
                }
                runner = runner.left;
            }
            else if (val > runner.value){
                if (!runner.right){
                    runner.right = new Node(val);
                    break;
                }
                runner = runner.right;
            }
        }
    }
    return this;
}

BST.prototype.findMin = function(node){
    if (node){
        while (node.left) node = node.left;
        return node.value;
    }
    return null;
}

// helper method that calls the removeInner with a given value
BST.prototype.remove = function(val){
    // root is re-initialized with root of a modified tree
    this.root = this.removeInner(val, this.root);
}

// Method to remove node with a given value. Recurrs over the tree to find the value and removes it
BST.prototype.removeInner = function(val, node){
    // Only continues if the node exists
    if (node){
        // If value to be deleted is less than root's value then move to the left subtree
        if (val < node.value) node.left = this.removeInner(val, node.left);
        // If value to be deleted is more than root's value then move to the right subtree
        else if (val > node.value) node.right = this.removeInner(val, node.right);
        // If value is equal to the root's value then delete this current node
        else if (node.left && node.right){
            // To delete node with 2 children, find the node with minimum value in right subtree and replace this node's value with minimum valued node
            node.value = this.findMin(node.right)
            node.right = this.removeInner(node.value, node.right);
        }
        // Changes the node to be removed to either its left or right, or null if it has no children
        else node = node.left || node.right;
    }
    return node;
}

BST.prototype.preTraverse = function(node){
    if (node){
        console.log(node.value);
        if (node.left) this.preTraverse(node.left);
        if (node.right) this.preTraverse(node.right);
    }
}

BST.prototype.postTraverse = function(node){
    if (node){
        if (node.left) this.postTraverse(node.left);
        if (node.right) this.postTraverse(node.right);
    }
    console.log(node.value);
}

BST.prototype.orderTraverse = function(node){
    if (node){
        if (node.left) this.orderTraverse(node.left);
        console.log(node.value);
        if (node.right) this.orderTraverse(node.right);
    }
}

BST.prototype.depth = function(node){
    if (!node || node.left == null && node.right == null) return 0;
    var leftDepth = this.depth(node.left);
    var rightDepth = this.depth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

let tree1 = new BST();
tree1.insert(40).insert(20).insert(50).insert(25).insert(10);
// tree1.orderTraverse(tree1.root);
// console.log(tree1.depth(tree1.root));

tree1.remove(20);
console.log(tree1);

// let tree2 = new BST();
// tree2.insert(30);
// console.log(tree2.depth(tree2.root));
