var apiKey = "b94ba98f7b192eb7f98656ac6fda8cdf"
var searchBtn = document.querySelector ("#search-button");
var eraseBtn = document.querySelector(".eraseBtn")


var weatherElements,cityName, storedHistoryBtn;
var storedHistory = document.querySelector("#history")
var currentForecast = document.querySelector("#current-forecast")



function searchValue(){
    var searchValue = document.querySelector("#search-value").value;
        console.log(searchValue);
        getCurrentWeather(searchValue);
        
     
}

function getCurrentWeather(searchValue){
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + apiKey;
    
       fetch(queryUrl)
         .then (function(res){
            return res.json()
         })
         .then(function(data){
            
            // append content to the dom
            // call forecast UV index 
                        
            var temp = data.main.temp
            console.log(data);
            // make sure values are found in data
            currentForecast.textContent = "temp: " + temp   
                  
            
            
            
         })
}
 







searchBtn.addEventListener("click",searchValue)  
