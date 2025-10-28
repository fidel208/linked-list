class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  headNode() {
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0) {
      return null;
    }

    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (count === index) {
        return current;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }

  pop() {
    if (this.head === null) {
      return null;
    }
    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let result = "";

    while (current !== null) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index < 0) {
        console.log("Invalid");
        return;
    }

    if (index === 0) {
        this.prepend(value);
        return;
    }

    const newNode = new Node(value);
    let current = this.head;
    let count = 0;

    while (current !== null && count < index -1) {
        current = current.nextNode;
        count++;
    }

    if (current === null) {
        console.log("Index out of range");
        return;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || !this.head) {
        console.log("Index not found");
        return;
    }

    if (index === 0) {
        this.head = this.head.nextNode;
        return;
    }

    let current = this.head;
    let count = 0;

    while (current.nextNode && count < index - 1) {
        current = current.nextNode;
        count++;
    }

    if (!current.nextNode) {
        console.log("Index out of range");
        return;
    }
    current.nextNode = current.nextNode.nextNode;
  }

}

export default LinkedList;