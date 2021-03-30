class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class linkedList {
  #size;
  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  get first() {
    return this.head.data;
  }

  get last() {
    return this.tail.data;
  }

  add_if_link_is_empty(node) {
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
  }

  addHead(data) {
    let newNode = new Node(data);
    this.add_if_link_is_empty(newNode);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.#size++;
  }

  addTail(data) {
    let newNode = new Node(data);
    this.add_if_link_is_empty(newNode);

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.#size++;
  }

  removeHead() {
    let removedNode = this.head;

    if (!this.head) return undefined;

    this.head = this.head.next;
    this.head.prev = null;

    this.#size--;
    return removedNode.data;
  }

  removeTail() {
    let removedNode = this.tail;

    if (!this.head) return undefined;

    this.tail = removedNode.prev;
    this.tail.next = null;

    this.#size--;
    return removedNode.data;
  }

  find(index) {
    let current;
    if (index < 0 || index >= this.#size) return undefined;

    if (index <= this.#size / 2) {
      current = this.head;
      for (let count = 0; count < index; count++) {
        current = current.next;
      }
    } else {
      for (let count = this.#size; count >= index; count--) {
        current = current.prev;
      }
    }
    return current;
  }

  insert(data, index) {
    if (index < 0 || index > this.#size) return null;

    if (index === this.#size) this.addTail(data);

    if (index === 0) this.addHead(data);

    let previousNode = this.find(index - 1);
    let newNode = new Node(data);

    let temp = previousNode.next;

    previousNode.next = newNode;
    newNode.next = temp;
    newNode.prev = previousNode;

    this.#size++;
    return newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.#size) return null;

    if (index === this.#size) return this.removeTail;

    if (index === 0) return this.removeHead;

    let removed = this.find(index);

    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;

    this.#size--;
    return removed;
  }

  update(data, index) {
    let node = this.find(index);
    if (node) node.data = data;
    return node;
  }
}

const linked = new linkedList();
linked.addHead("wowow");
linked.addHead(32);
linked.addHead([775, 74]);

linked.addHead(2 + 4);
linked.addHead(76437);
linked.addHead({ hell: 74 });

console.log(linked.insert(23, 2));
console.log(linked.update(56, 2));
console.log(linked.remove(2));

console.log(linked.find(2));
console.log(linked.removeHead());
console.log(linked.removeTail());
