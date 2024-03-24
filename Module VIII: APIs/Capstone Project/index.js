const crypto1El = document.getElementById("crypto1");
let location = { lat: "", lon: "" };

function updateTime(time) {
	const now = new Date().toLocaleTimeString();
	document.getElementById("currentTime").innerHTML = now;
}

fetch(
	"https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature",
)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		console.log(data.urls.regular);
		document.body.style.backgroundImage = `url(${data.urls.regular})`;
		document.getElementById("author").textContent = `By: ${data.user.name}`;
		// throw Error("Data not found")
	})
	.catch((err) => {
		document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDc3NzMxMjF8&ixlib=rb-4.0.3&q=80&w=1080")`;
		console.warn("error fetching image");
	});

function getCryptoData(coin) {
	fetch(
		`https://api.coingecko.com/api/v3/coins/${coin}?tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`,
	)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			// if (!data.ok) {
			//     throw Error("Something went wrong with this request.")
			// }
			crypto1El.innerHTML = `
            <img src=${data.image.small} style="height: 40px" /> 
            <p>${data.name}: </p>
            <div class="crypto-prices">
                <p>$${data.market_data.current_price.usd}</p>
                <p>$${data.market_data.high_24h.usd}</p>
                <p>$${data.market_data.low_24h.usd}</p>
            </div>
            `;

			// data.market_data.current_price.usd
		})
		.catch((err) => console.warn("there was an error"));
}

function success(pos) {
	const crd = pos.coords;
	lat = pos.latitude;
	lon = pos.longitude;
	console.log("Your current position is:");
	console.log(`Latitude : ${crd.latitude}`);
	console.log(`Longitude: ${crd.longitude}`);
	console.log(`More or less ${crd.accuracy} meters.`);
}
navigator.geolocation.getCurrentPosition(success);

async function getWeather() {
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`,
	);
	const data = await res.json();
	console.log(data);
}
getCryptoData("ethereum");
setInterval(updateTime, 500);
