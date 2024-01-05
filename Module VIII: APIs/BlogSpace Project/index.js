 /**
     * Challenge: Send this off to the server!
     * 
 
     * 3. method: ???
     * 4. Request body: ??? (Remember to turn it into JSON)
     * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
     */


const postButtonEl = document.getElementById('post-button')
const titleEl = document.getElementById("post-title")
const bodyEl = document.getElementById("post-area")
const postFormEl = document.getElementById("postInput")


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


    // postButtonEl.addEventListener('click', (event)=> {
    //     event.preventDefault()
    //     newPost = {title: titleEl.value, body: bodyEl.value}
    //     postItem(newPost)
    // })

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
 