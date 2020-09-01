var map = L.map('main_map').setView([-34.67359531466894,-58.645599655906736], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            console.log(bici.ubicacion)
            L.marker(bici.ubicacion, {title:bici.id}).addTo(map)
                .bindPopup("ID: "+bici.id+" | "+bici.modelo+" | "+bici.color)
                .openPopup();
        })
    }
})