// GeoJSON is pasted before the semi-colon below:
var orbitistApiGeoJson = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-69.124603271485,43.886016470434]},"properties":{"name":"Nesting","description":"\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n     \u003Cdiv class=\u0022popuptitle\u0022\u003E\n     \u003Ch3\u003ENesting\u003C\/h3\u003E\n\u003C\/div\u003E\n     \u003Cp\u003EArctic terns nest durning the summer. Islands off\u00a0the coast of Maine are prime locations\u00a0in\u00a0North America.\u003C\/p\u003E\n     \n     \u003Ca href=\u0022https:\/\/www1.maine.gov\/ifw\/wildlife\/endangered\/pdfs\/arctictern_46_47.pdf\u0022\u003E\u003Cp class=\u0022btn btn-default\u0022\u003EMore info\u003C\/p\u003E\u003C\/a\u003E\n\u003C\/div\u003E"}}]};
  
// Markers are configured here:
var orbitistIcon = L.AwesomeMarkers.icon({
    icon: 'coffee',
    markerColor: 'blue'
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