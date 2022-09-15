/* Imports */

/* Get DOM Elements */
const cityName = document.getElementById('city-name');
const climatePhoto = document.getElementById('climate-photo');
const archPhoto = document.getElementById('arch-photo');
const attractionsList = document.getElementById('attractions-list');

/* State */
let city = {
    name: 'Olympia',
    climate: 'tropical',
    architecture: 'surreal',
    attractions: ['Capital Building', 'Capital Lake', 'Olympia Brewery'],
};

/* Events */

/* Display Functions */
function displayCity() {
    cityName.textContent = city.name;
    climatePhoto.src = './assets/climate/climate-' + city.climate + '.jpg';
    climatePhoto.alt = city.climate;
    archPhoto.src = './assets/architecture/arch-' + city.architecture + '.jpg';
}

// (don't forget to call any display functions you want to run on page load!)
displayCity();
