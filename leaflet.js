const myCoords = [50.78070645717412, -1.0774538641364018];
const setMap = () => {
    const mapOptions = {}
    return L.map('map', mapOptions).setView(myCoords, 16);
}
const setTiles = () => {
    const tileOptions = { maxZoom: 19 }
    const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    return L.tileLayer(tileUrl, tileOptions).addTo(map);
}
const setMarker = () => {
    const iconSize = [32, 37];
    const icon = L.icon({
        iconUrl: 'tree.png',
        iconSize: iconSize,
        iconAnchor: [iconSize[0] / 2, iconSize[1]],
        popupAnchor: [0, -iconSize[1]],
    });
    const markerOptions = {
        icon: icon,
    }
    return L.marker(myCoords, markerOptions).addTo(map).bindPopup('Hi');
}

const map = setMap();
const tiles = setTiles();
const marker = setMarker();
