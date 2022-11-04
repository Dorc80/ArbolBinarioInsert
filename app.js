function BST() {
    this.root = null;
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (val) {

    let currentNode = this.root;

    if (this.root == null) {
        this.root = new Node(val);
        return this;
    }

    let salir = false;

    while (!salir) {

        if (val < currentNode.value) {
            if(currentNode.left == null) {
                currentNode.left = new Node(val);
                salir = true;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(currentNode.right == null) {
                currentNode.right = new Node(val);
                salir = true;
            } else {
                currentNode = currentNode.right;
            }
        }

    }

    return this;

}

let first = new BST();
first.insert(10).insert(20).insert(5).insert(1).insert(29).insert(137).insert(137).insert(6).insert(19);
console.log(JSON.stringify(first));