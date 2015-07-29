// Set lat/long where the map initiates and at what zoom level
var map = new L.Map('map', {
	center: [42.45540, -79.33896],
	zoom: 17
});

// Add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tiles.mapbox.com/v3/orbitist.ffee1ab6/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://mapbox.com">Mapbox</a>'
}).addTo(map);

// Add cartodb layer
cartodb.createLayer(map, 'https://orbitist.cartodb.com/api/v2/viz/2bc0e686-3481-11e5-b454-0e0c41326911/viz.json')
	.addTo(map)
	.on('done', function(layer) {
		//do stuff
	})
	.on('error', function(err) {
	alert("some error occurred: " + err);
});
