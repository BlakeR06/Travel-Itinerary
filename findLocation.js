var map;

function searchLocation() {
    var destination = document.getElementById("locationInput").value;

    // Use Nominatim for geocoding
    fetch(`https://nominatim.openstreetmap.org/search?q=${destination}&format=json`)
        .then(response => response.json())
        .then(destinationData => {
            if (destinationData.length > 0) {
                var destLatitude = destinationData[0].lat;
                var destLongitude = destinationData[0].lon;

                // Clear the existing map and markers
                if (map) {
                    map.off();
                    map.remove();
                }

                // Create a new Leaflet map
                map = L.map('map').setView([destLatitude, destLongitude], 13);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                // Add marker for the searched location
                var destMarker = L.marker([destLatitude, destLongitude]).addTo(map)
                    .bindPopup(destination)
                    .openPopup();
            } else {
                alert('Location not found.');
            }
        })
        .catch(error => console.error('Error:', error));
}