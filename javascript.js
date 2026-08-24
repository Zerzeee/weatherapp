let cityName;
function searchUp(){
    document.getElementById("app").classList.add("changed");
    const input=document.getElementById("userInput");
    const inputValue=input.value;
    console.log(inputValue);
    cityName=inputValue;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch("https://api.ipify.org?format=json")
        .then(response=>response.json())
        .then(data=>{
            const ipAddress=data.ip;
            console.log(ipAddress);
            const getIp=document.getElementById("ip");
            getIp.textContent="Your Ip address: "+ data.ip;
        })
    
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            const dataObject=data;
            const getWeather=document.getElementById("temperature");
            const getWind=document.getElementById("wind");  
            getWeather.textContent="Temperature: "+ dataObject.main.temp;
            getWind.textContent="Wind Speed: " + dataObject.wind.speed;

        })

    const getBrowser=document.getElementById("os")
    const getWidth=document.getElementById("screenWidth");
    const getHeight=document.getElementById("screenHeight");
    getBrowser.textContent="Your browser information: "+navigator.userAgent;
    getWidth.textContent="Your screen width: "+ screen.width;
    getHeight.textContent="Your screen height: "+screen.height;

    





    
}


const apiKey="c3444a381c7813050e9b1cc711724213";

