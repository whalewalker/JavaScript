// class User{
//     static #takenNames = [];
//     name = "unknown";

//     constructor(name){
//         this.name = name;
//         User.#takenNames.push(name);
//     }

//     static isNameTaken(name) {
//         return User.#takenNames.includes(name);
//       }

//     static addName(name){
//         if(!User.isNameTaken(name)){
//             User.#takenNames.push(name);
//         }
//     }

//     getNames(){
//         return User.#takenNames;
//     }
   

// }

// const user = new User("Abd");
// User.addName("Joh show");
// User.addName("Wowo");
// User.addName("Abd")
// console.log(user.getNames())

class User {
    #name;

    constructor(name){
        this.#name = name;
    }

    getName(){
        return this.#name
    }
}

class ContentWriter extends User{
    posts = [];

    addToPost(content){
        this.posts.push(content);
    }

    getPosts(){
        return this.posts
    }
}

const Writer = new ContentWriter("Abdullah");

console.log(Writer.getName());
Writer.addToPost("Hello");
Writer.addToPost("Hey enjoy");

console.log(Writer.getPosts())


