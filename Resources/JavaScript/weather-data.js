"use strict";

function Weather(cityName, description, temperature) {
    this.cityName = cityName;
    this.description = 'MOOD: ' + description;
    this.temperature = 'TEMP: ' + Math.round(temperature) + String.fromCharCode(176) +' CELSIUS'
}
