// GeoJSON is pasted before the semi-colon below:
var orbitistGeoJson = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': http://www.app.orbitist.com/geojson/666.json,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

// Markers are configured here:
var orbitistIcon = L.divIcon({
        html: '<i class="fa fa-map-marker"></i>', // You can replace 'fa-fa-marker' with any font-awesome icon!
        className: 'fa-icon', // Don't change this unless you're really a genius!
        popupAnchor: [0, -30] // Don't change this either!
    });
  
// ADVANCED: This tells the map what goes in popups.
function orbitistPopup(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.description, {closeButton: false});
    }
}

// ADVANCED: This adds the markers to the map.
L.geoJson(orbitistGeoJson, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: orbitistIcon});
    },
    onEachFeature: orbitistPopup
}).addTo(map);
