// Callback

const posts = [
  { title: "First", body: "My first Post" },
  { title: "Second", body: "My second Post" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.body}`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

// getPosts()

// const createPost = (post, callback) =>{
//     setTimeout(() => {
//         posts.push(post);
//         callback()
//     }, 2000);
// }

// createPost({title: "Third", body: "My third post"}, getPosts);

// Promise

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) resolve();
      else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

// createPost({ title: "Third", body: "My third post" })
//   .then(getPosts)
//   .catch((err) => console.log(err));


//   const promise1 = Promise.resolve("Hello world");
//   const promise2 = 10;
//   const promise3 = new Promise((res, rej) =>{
//       setTimeout(res, 2000, "Goodbye");
//   })

//   const promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())



//   Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values))


// Async await

// const init = async () =>{
//     await createPost({title: "Third", body: "My third post"});
//     getPosts();
// }

// init()

// Async await with fetch

const fetchPost = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();

    console.log(data)
}

fetchPost()