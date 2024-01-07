const apiKey='3a04c5d5cc2c9feb6c44b2f4364b30b8';

document.getElementById('searchBtn').addEventListener('click',() =>{
    const city = document.getElementById('searchInput').value;
    fetchWeather(city);
})

async function fetchWeather(city){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
        changeBackground(data);
    }catch(error){
        console.error('Error fetching weather ', error);
    }
}

function displayWeather(data){
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML=`
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}</p>
    <p>Description: ${data.weather[0].description} 
    `;
}

function changeBackground(data){
    const imageUrl=`https://source.unsplash.com/1600x900/?${data.name}`;
    document.body.style.backgroundImage=`url(${imageUrl})`;
}

console.log("running...");