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
    return (currentNode.nextNode = null);
  }
  //RECURSIVE APPROACH
  // popRecursive(node) {
  //   if (node.nextNode.nextNode === null) return node.nextNode = null;
  //   return this.popRecursive(node.nextNode);
  // }

  contains(value) {
    let currentNode = this.headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.headNode;
    let index = 0;
    while (currentNode) {
      if (value === currentNode.value) {
        return index;
      } else {
        currentNode = currentNode.nextNode;
        index++;
      }
    }
    return null;
  }

  toString() {
    let linkedList = "";
    let currentNode = this.headNode;
    while (currentNode) {
      linkedList += `(${currentNode.value}) -> `
      currentNode = currentNode.nextNode;
    }
    linkedList += "null";
    return linkedList;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      const previousNode = this.at(index - 1);
      const currentNode = this.at(index);
      previousNode.nextNode = newNode;
      newNode.nextNode = currentNode;
    }
  }

  removeAt(index) {
    const nodeToRemove = this.at(index);
    const previousNode = this.at(index - 1);
    const afterNode = this.at(index + 1);
    previousNode.nextNode = afterNode;
  }
};
