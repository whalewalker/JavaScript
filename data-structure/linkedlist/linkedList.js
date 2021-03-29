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

  get first(){
      return this.head.data;
  }

  get last(){
      return this.tail.data;
  }

  addHead(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.#size++;
  }

  addTail(data) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.#size++;
  }

  removeHead(){
      let removedNode = this.head;

      if(!this.head) return undefined;

      this.head = this.head.next;
      this.head.prev = null;

      this.#size--;
      return removedNode.data;
  }

  removeTail(){
    let removedNode = this.tail;

    if(!this.head) return undefined;

    this.tail = removedNode.prev;
    this.tail.next = null;

    this.#size--;
    return removedNode.data;
  }
}

const linked = new linkedList();
linked.addHead("wowow");
linked.addHead(32);
linked.addHead([775, 74]);

linked.addHead(2 + 4);
linked.addHead(76437);
linked.addHead({"hell": 74});


console.log(linked.removeHead())
console.log(linked.removeTail())
