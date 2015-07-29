// GeoJSON is pasted before the semi-colon below:
var orbitistGeoJson = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-79.338963193176,42.455400236229]},"properties":{"name":"Forever Wild Forest","description":"\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n \u003Cdiv class=\u0022popuptitle\u0022\u003E\n \u003Ch3\u003EForever Wild Forest\u003C\/h3\u003E\n\u003C\/div\u003E\n \n \n \n\u003C\/div\u003E"}}]};

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
