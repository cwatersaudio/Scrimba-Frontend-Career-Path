
const postButtonEl = document.getElementById('post-button')
const titleEl = document.getElementById("post-title")
const bodyEl = document.getElementById("post-area")
const postFormEl = document.getElementById("postInput")
const postList = document.getElementById("blog-list")

let postArr = []
function renderPosts() {
    let html = ""
    for (let post of postsArr) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
         `
    }
    postList.innerHTML = html
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5)
        renderPosts()
    })


  

postFormEl.addEventListener('submit', (event)=> {
    event.preventDefault()
    newPost = {title: titleEl.value, body: bodyEl.value}
    postItem(newPost)
})

    function postItem(item) {
        fetch ('https://apis.scrimba.com/jsonplaceholder/posts', {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("blog-list").innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
            <hr />
            ${document.getElementById("blog-list").innerHTML}
            `
            
        })
        
    }
 