const postButtonEl = document.getElementById('post-button')
const titleEl = document.getElementById("post-title")
const bodyEl = document.getElementById("post-area")


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

    postButtonEl.addEventListener('click', (event)=> {
        event.preventDefault()
        newPost = {title: titleEl.value, body: bodyEl.value}
        console.log(newPost);
    })