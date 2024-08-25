const mapOptions = {
    zoomControl: false,
}
const circleOptions = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500,
}
const tileOptions = {
    maxZoom: 19,
}
const polygonCoords = [
    [51.509, -0.080],
    [51.503, -0.060],
    [51.511, -0.047],
];

const map = L.map('map', mapOptions).setView([51.505, -0.09], 13);
const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, tileOptions).addTo(map);
const marker = L.marker([51.5, -0.09]).addTo(map).bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
const circle = L.circle([51.508, -0.11], circleOptions).addTo(map).bindPopup('I am a circle.');
const polygon = L.polygon(polygonCoords).addTo(map).bindPopup('I am a polygon.');
const popup = L.popup().setLatLng([51.513, -0.09]).setContent('I am a standalone popup.').openOn(map);
const onMapClick = (e) => popup.setLatLng(e.latlng).setContent(`You clicked the map at ${e.latlng.toString()}`).openOn(map);

map.on('click', onMapClick);
