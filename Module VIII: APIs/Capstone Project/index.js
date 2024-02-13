fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
        throw Error("Data not found")
    })
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDc3NzMxMjF8&ixlib=rb-4.0.3&q=80&w=1080")`
    })

fetch('https://api.coingecko.com/api/v3/coins/ethereum?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false')
    .then(res => res.json())
    .then(data => { console.log(data) })
    .catch(err => console.warn('there was an error'))
