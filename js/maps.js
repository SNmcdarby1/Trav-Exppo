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
const markers = locations.map((location, i) => {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
    });
});


function initMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 8,

        center: {
            Lat: -1.28579,
            lng: 36.82003
        }
    });


    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    let locations = [{

            lat: -4.05428,
            lng: 39.6043

        },
        {

            lat: -0.28066,
            lng: 36.07942

        },
        {

            lat: -1.27381,
            lng: 36.83175

        },
        {

            lat: -4.05208,
            lng: 39.70079

        },
        {

            lat: -1.28634,
            lng: 36.76013

        },

        {

            lat: -1.27381,
            lng::36.83175

        },

        {

            lat: 0.01607,
            lng: 37.07795

        }
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
} < /script>  <
script src = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js" > < /script>  <
script async defer src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDu9EMPEt4GX-YMhTjYoHL0ATPN-odHDa0&callback=initMap" > < /script>