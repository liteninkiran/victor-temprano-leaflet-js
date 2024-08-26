const mapOptions = { }
const circleOptions = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 200,
}
const tileOptions = {
    maxZoom: 19,
}
const myCoords = [
    50.78070645717412,
    -1.0774538641364018,
];
const polygonCoords = [
    [myCoords[0] - 0.006, myCoords[1] + 0.001],
    [myCoords[0] + 0.002, myCoords[1] + 0.004],
    [myCoords[0] - 0.003, myCoords[1] + 0.007],
];

const map = L.map('map', mapOptions).setView(myCoords, 16);
const tileUrls = [
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}',
];
const tiles = L.tileLayer(tileUrls[0], tileOptions).addTo(map);
const marker = L.marker(myCoords).addTo(map).bindPopup('<b>Hello world!</b><br />I am a popup.');
const circle = L.circle(myCoords, circleOptions).addTo(map).bindPopup('I am a circle.');
const polygon = L.polygon(polygonCoords).addTo(map).bindPopup('I am a polygon.');
const onMapClick = (e) => popup.setLatLng(e.latlng).setContent(`You clicked the map at ${e.latlng.toString()}`).openOn(map);

map.on('click', onMapClick);
