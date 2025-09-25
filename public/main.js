// public/main.js

let map;
let busMarker = null;
let polyline = null;

async function fetchRoutes() {
  const res = await fetch('/api/routes');
  return await res.json();
}

async function fetchGeometryPoints() {
  const res = await fetch('/api/geometryPoints');
  return await res.json();
}

function initMap() {
  map = L.map('map').setView([27.1767, 78.0081], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
}

// Display final stops on map
async function renderStops() {
  const data = await fetchRoutes();
  const routes = data.routes;

  routes.forEach(route => {
    const [lat, lng] = route.finalStopCoords;
    L.marker([lat, lng]).addTo(map).bindPopup(`<b>${route.name}</b>`);
  });
}

// Subscribe to a route
async function subscribeRoute(routeName) {
  const routesData = await fetchRoutes();
  const geometryData = await fetchGeometryPoints();

  const route = routesData.routes.find(r => r.name === routeName);
  if (!route) {
    alert('Route not found');
    return;
  }

  // Draw bus route polyline
  polyline = L.polyline(geometryData.geometry, { color: 'blue' }).addTo(map);

  // Add bus marker at starting point
  const start = geometryData.geometry[0];
  busMarker = L.marker(start, { icon: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61231.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })}).addTo(map);

  map.setView(start, 15);
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderStops();

  document.getElementById('subscribeBtn').addEventListener('click', () => {
    const routeName = document.getElementById('routeInput').value.trim();
    if (routeName) subscribeRoute(routeName);
  });
});
