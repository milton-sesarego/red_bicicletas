var map = L.map('main_map').setView([-34.67359531466894,-58.645599655906736], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.6735, -58.6455]).addTo(map)
    .bindPopup('Marker 1')
    .openPopup();

L.marker([-34.65, -58.65]).addTo(map)
    .bindPopup('Marker 2')
    .openPopup();