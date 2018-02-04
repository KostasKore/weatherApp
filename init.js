"use strict";

var searchCityName = document.querySelector('#cityName');

var button = document.querySelector('button');

var loading = document.querySelector('#loading');

var weatherTemplate = document.querySelector('#weather');

var weatherCity = document.querySelector('#weatherCity');

var weatherDescription = document.querySelector('#weatherDescription');

var weatherTemp = document.querySelector('#weatherTemp');



function Weather(cityName, description, temperature){
  this.cityName = cityName;
  this.description = description;
  this.temperature = temperature;
}
