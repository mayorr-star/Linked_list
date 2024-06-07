const Node = require("../nodes/nodes");
module.exports = class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let tailNode = this.headNode;
      while (tailNode.nextNode) {
        tailNode = tailNode.nextNode;
      }
      tailNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let firstNode = this.headNode;
      this.headNode = newNode;
      newNode.nextNode = firstNode;
    }
  }

  size() {
    let currentNode = this.headNode;
    let numberOfNodes = 0;
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      numberOfNodes++;
    }
    return numberOfNodes;
  }
  //RECURSIVE APPROACH
  //   sizeRecursive(node) {
  //     if (node === null) return 0;
  //     return 1 + this.sizeRecursive(node.nextNode);
  //   }

  head() {
    return this.headNode;
  }

  tail() {
    let tailNode = this.headNode;
    while (tailNode.nextNode !== null) {
      tailNode = tailNode.nextNode;
    }
    return tailNode;
  }
  //RECURSIVE APPROACH
  //   tailRecursive(node) {
  //     if (node.nextNode === null) return node;
  //     return this.tailRecursive(node.nextNode);
  //   }

  at(index) {
    let currentNode = this.headNode;
    let counter = 0;
    while (counter < index) {
      currentNode = currentNode.nextNode;
      counter++;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.headNode;
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
};