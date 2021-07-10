$(function () {
    $(".btn").click(function () {
        $(".registration-active").toggleClass("registration-inactive");
        $(".login-inactive").toggleClass("login-active");
        $(".signup-active").toggleClass("signup-inactive");
        $(".signin-inactive").toggleClass("signin-active");
    });
});

var mymap = L.map('mapid').setView([46.6671250370407, 32.579625242552055], 12);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var marker = L.marker([46.65279596926725, 32.600332042976554]).addTo(mymap);
marker.bindPopup("<b>Карта!</b><br>Местоположение").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
