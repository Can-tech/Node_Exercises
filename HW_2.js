//Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
//Exercise-1 
var posts = [
    {id: 1, header: "My phone", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 2, header: "My family", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 3, header: "My lesson", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]

const listPosts = ()=>{
    posts.map((element)=>{
        console.log(element);
    })
}

const addPost = (newPost) => {
    posts.push(newPost);
    
}
addPost({id: 4, header: "My new friend", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."});
listPosts();




//Exercise-2 Callback
var posts = [
    {id: 1, header: "My new phone", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 2, header: "My family", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 3, header: "My lesson", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]

const listPosts = ()=>{
    posts.map((element)=>{
        console.log(element);
    })
}

const addPost = (newPost, callback) => {
    posts.push(newPost);
    callback();
}
addPost({id: 4, header: "My new friend", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."}, listPosts);





//Exercise-3 Promise
var posts = [
    {id: 1, header: "My new phone", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 2, header: "My family", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 3, header: "My lesson", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]

const listPosts = ()=>{
    posts.map((element)=>{
        console.log(element);
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject)=>{
        posts.push(newPost);
        resolve("Working");
        //reject("There is a problem");
    })
    return promise1;
}

addPost({id: 4, header: "My new friend", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
    .then(()=>{
        console.log("New List");
        listPosts();
    }).catch((error)=>{
        console.log("error");
    });



//Exercise-4 Async-Await
var posts = [
    {id: 1, header: "My new phone", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 2, header: "My family", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {id: 3, header: "My lesson", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]

const listPosts = ()=>{
    posts.map((element)=>{
        console.log(element);
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject)=>{
        posts.push(newPost);
        resolve(posts);
        //reject("There is a problem");
    })
    return promise1;
}

async function showPosts(){
    try{
        await addPost({id: 4, header: "My new friend", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."});
        listPosts();
    }catch(error){
        console.log(error);

    }

}
showPosts();



