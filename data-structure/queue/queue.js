class Queue{
    #items;
    #headIndex;
    #tailIndex;

    constructor(){
        this.#headIndex = 0;
        this.#tailIndex = 0;
        this.#items = {}
    }

    enqueue(item){
        this.#items[this.#tailIndex] = item;
        this.#tailIndex++;
    }

    dequeue(){
        const item = this.#items[this.#headIndex];
        delete this.#items[this.#headIndex];
        this.#headIndex++;
        return item;
    }

    getItems(){
        return this.#items;
    }

    peek(){
        if(this.#items == null) throw new TypeError("Queue is empty");
        return this.#items[this.#headIndex];
    }

    get length(){
        return this.#tailIndex - this.#headIndex;
    }
}

const queue = new Queue();
queue.dequeue()
queue.enqueue(7);
queue.enqueue("bisi");
queue.enqueue("Hello");

console.log(queue.getItems());

console.log(queue.dequeue())

console.log(queue.length);

console.log(queue.getItems());

