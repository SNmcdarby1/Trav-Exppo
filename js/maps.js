function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {

        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}