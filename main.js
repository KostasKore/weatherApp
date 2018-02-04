"use strict";


button.addEventListener('click', weatherSearch);

function weatherSearch(){

  loading.style.display = 'block';
  weatherTemplate.style.display = 'none';

  var cityName = searchCityName.value;
  if (cityName.trim().length == 0){
      return alert('Something went wrong. PLease try again');
  }

  var http = new XMLHttpRequest();
  var apKey = '';
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apKey;
  var method = 'GET';

  http.open(method, url);
  http.onreadystatechange = function(){
    if (http.readyState == XMLHttpRequest.DONE && http.status === 200){
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase(), data.main.temp)

      Update(weatherData); //must for the update which we have to create to update the textContent

    }else if (http.readyState === XMLHttpRequest.DONE){
      alert('Something went wrong!!!!');
    }
  };
  http.send();



}//weatherData



function Update(weatherData){
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemp.textContent = weatherData.temperature;


  loading.style.display = 'none';
  weatherTemplate.style.display = 'block';
}
