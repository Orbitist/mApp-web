// Set lat/long where the map initiates and at what zoom level
var map = new L.Map('map', {
	center: [35, -55],
	zoom: 3
});

// Add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tiles.mapbox.com/v3/orbitist.ffee1ab6/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://mapbox.com">Mapbox</a>'
}).addTo(map);

// Add cartodb layer
cartodb.createLayer(map, 'http://orbitist.cartodb.com/api/v2/viz/040ba3cc-0252-11e4-ae4c-0e230854a1cb/viz.json')
	.addTo(map)
	.on('done', function(layer) {
		//do stuff
	})
	.on('error', function(err) {
	alert("some error occurred: " + err);
});
