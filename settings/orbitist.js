// GeoJSON is pasted before the semi-colon below:
var orbitistApiGeoJson = ;
  
// Markers are configured here:
var orbitistIcon = L.MakiMarkers.icon({
    icon: "airport", // For icon names, visit http://mapbox.com/maki
    color: "#2675a2",
    size: "m"
});

// ADVANCED: This tells the map what goes in popups.
function orbitistApiPopup(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.description, {closeButton: false});
    }
}

// ADVANCED: This adds the markers to the map.
L.geoJson(orbitistApiGeoJson, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {icon: orbitistIcon});
    },
    onEachFeature: orbitistApiPopup
}).addTo(map);