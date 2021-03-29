class Stack{
    #items;
    #headIndex;
    
    constructor(){
        this.#items = {};
        this.#headIndex = 0;
    }

    get length(){
        return Object.keys(this.#items).length;
    }

    push(item){
        this.#items[this.#headIndex] = item;
        this.#headIndex++;
    }

    pop(){
        const item =  this.#items[this.length - 1];
        delete this.#items[this.length - 1];
        this.#headIndex++;
        return item;
    }


    peek(){
        return this.#items[this.#headIndex];
    }

    isEmpty(){
        return this.length === 0;
    }

  

    getItems(){
        return this.#items;
    }
}

const stack = new Stack();
stack.push(2);
stack.push("Hello word");
console.log(stack.getItems())
console.log(stack.pop());
console.log(stack.length);
console.log(stack.getItems())

console.log(stack.pop());
console.log(stack.length);
console.log(stack.isEmpty())
console.log(stack.getItems())
