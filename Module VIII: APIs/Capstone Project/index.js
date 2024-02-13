
const crypto1El = document.getElementById('crypto1')


fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
        // throw Error("Data not found")
    })
    .catch(err => {
        document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDc3NzMxMjF8&ixlib=rb-4.0.3&q=80&w=1080")`
        console.warn('error fetching image')
    })

function getCryptoData(coin) {
    fetch(`https://api.coingecko.com/api/v3/coins/${coin}?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if (!data.ok) {
            //     throw Error("Something went wrong with this request.")
            // }
            crypto1El.innerHTML = `
            <img src=${data.image.small} style="height: 40px" /> <p>${data.name}: $${data.market_data.current_price.usd}</p>
            `

            // data.market_data.current_price.usd
        })
        .catch(err => console.warn('there was an error'))
}


getCryptoData('ethereum')
