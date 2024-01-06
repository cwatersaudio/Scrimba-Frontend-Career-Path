
const postButtonEl = document.getElementById('post-button')
const titleEl = document.getElementById("post-title")
const bodyEl = document.getElementById("post-area")
const postFormEl = document.getElementById("postInput")
const postListEl = document.getElementById("blog-list")

let postsArr = []
function renderPosts() {
    let html = ""
    for (let post of postsArr) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
         `
    }
    postListEl.innerHTML = html
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
            postsArr.unshift(data)
            console.log(postsArr);
            renderPosts()
            postFormEl.reset()
            
        })
        
    }
 