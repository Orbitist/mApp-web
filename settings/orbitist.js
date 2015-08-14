// GeoJSON is pasted before the semi-colon below:
var orbitistGeoJson = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-3.3398437570532,-1.3154971930048],[-12.128906256702,20.058511274592],[-35.859375005755,29.614057954862],[-56.601562504927,18.398836347264],[-54.140625005025,-14.687224539672],[-3.3398437570532,-1.3154971930048]]]},"properties":{"name":"Polygon","description":"\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n \u003Cdiv class=\u0022popuptitle\u0022\u003E\n \u003Ch3\u003EPolygon\u003C\/h3\u003E\n\u003C\/div\u003E\n \n \n \n\u003C\/div\u003E"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[-14.94140625659,-9.5330403489733],[-24.96093750619,17.059410370001],[-40.605468755565,2.3751129409657],[-45.703125005362,15.371598248031]]},"properties":{"name":"Line","description":"\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n \u003Cdiv class=\u0022popuptitle\u0022\u003E\n \u003Ch3\u003ELine\u003C\/h3\u003E\n\u003C\/div\u003E\n \n \n \n\u003C\/div\u003E"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-78.485494,42.617457]},"properties":{"name":"moms house","description":"\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n \u003Cdiv class=\u0022popuptitle\u0022\u003E\n \u003Ch3\u003Emoms house\u003C\/h3\u003E\n\u003C\/div\u003E\n \n \n \n\u003C\/div\u003E"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-79.127139279051,42.455268545079]},"properties":{"name":"Another Test","description":"\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n \u003Cdiv class=\u0022popuptitle\u0022\u003E\n \u003Ch3\u003EAnother Test\u003C\/h3\u003E\n\u003C\/div\u003E\n \n \n \n\u003C\/div\u003E"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-122.46939539909,37.809161867926]},"properties":{"name":"Test","description":"\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n \u003Cdiv class=\u0022popuptitle\u0022\u003E\n \u003Ch3\u003ETest\u003C\/h3\u003E\n\u003C\/div\u003E\n \n \n \n\u003C\/div\u003E"}}]}; 

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
