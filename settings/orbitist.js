// GeoJSON is pasted before the semi-colon below:
var orbitistGeoJson = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-69.133797883988,43.86056727762]},"properties":{"name":"Nesting","description":"\u003Ca href=\u0022http:\/\/www.app.orbitist.com\/sites\/default\/files\/styles\/lightbox_800\/public\/images\/Arctic_tern_8664.jpg?itok=pfvdxRMM\u0022 data-lightbox=\u002233\u0022 data-title=\u0022\u0022\u003E\n\u003Cimg src=\u0022http:\/\/www.app.orbitist.com\/sites\/default\/files\/styles\/leaflet_popup__301_x_270_\/public\/images\/Arctic_tern_8664.jpg?itok=palZDRvD\u0022 width=\u0022301px\u0022 height=\u0022270px\u0022\u003E\n\u003Cdiv class=\u0022popupimage-expand\u0022\u003E\u003Cspan class=\u0022fa fa-expand\u0022\u003E\u003C\/span\u003E\u003C\/div\u003E\n\u003C\/a\u003E\n\n\u003Cdiv class=\u0022popupbody\u0022\u003E\n     \u003Cdiv class=\u0022popuptitle\u0022\u003E\n     \u003Ch3\u003ENesting\u003C\/h3\u003E\n\u003C\/div\u003E\n     \u003Cp\u003EArctic terns nest durning the summer. Islands off\u00a0the coast of Maine are prime locations\u00a0in\u00a0North America.\u003C\/p\u003E\n     \n     \u003Ca href=\u0022https:\/\/www1.maine.gov\/ifw\/wildlife\/endangered\/pdfs\/arctictern_46_47.pdf\u0022\u003E\u003Cp class=\u0022btn btn-default\u0022\u003EMore info\u003C\/p\u003E\u003C\/a\u003E\n\u003C\/div\u003E"}}]};
  
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