const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
    this.maxValue = null;
    this.minValue = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      this.maxValue = newNode.data;
      this.minValue = newNode.data;
    } else {
      this.addNewNode(this.rootNode, newNode);
    }
  }

  addNewNode(node, newNode) {
    let min;
    let max;
    if (newNode.data < node.data) {
      min = newNode.data;
      if (node.left === null) {
        node.left = newNode;
        this.minValue = this.minValue > min ? min : this.minValue;
      } else {
        this.addNewNode(node.left, newNode);
      }
    } else {
      max = newNode.data;
      if (node.right === null) {
        node.right = newNode;
        this.maxValue = this.maxValue < max ? max : this.maxValue;
      } else {
        this.addNewNode(node.right, newNode);
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) return true;
      if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left
      } else {
        currentNode = null;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) return currentNode;
      if (currentNode.data < data) {
        currentNode = currentNode.right;
      } else if (currentNode.data > data) {
        currentNode = currentNode.left
      } else {
        currentNode = null;
      }
    }
    return currentNode;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  min() {
    return this.minValue;
  }

  max() {
    return this.maxValue;
  }
}

module.exports = {
  BinarySearchTree
};