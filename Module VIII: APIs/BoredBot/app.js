const boredButtonEl = document.getElementById('boredButton')
const ideaEl = document.getElementById('idea')

boredButtonEl.addEventListener('click', ()=>{
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        ideaEl.textContent = data.activity

    })
})