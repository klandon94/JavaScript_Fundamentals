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

BST.prototype.delete = function(val){
    if (!this.root) return false;
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
tree1.insert(40).insert(20).insert(50).insert(25);
tree1.orderTraverse(tree1.root);
console.log(tree1.depth(tree1.root));

// let tree2 = new BST();
// tree2.insert(30);
// console.log(tree2.depth(tree2.root));
