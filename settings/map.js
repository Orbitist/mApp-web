 var map = new L.Map('map', {
	center: [0, 0],
	zoom: 3
});

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tiles.mapbox.com/v3/orbitist.l3d32kbn/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://mapbox.com">Mapbox</a>'
}).addTo(map);
// use cartodb layer
cartodb.createLayer(map, 'http://orbitist.cartodb.com/api/v2/viz/040ba3cc-0252-11e4-ae4c-0e230854a1cb/viz.json')
	.addTo(map)
	.on('done', function(layer) {
		//do stuff
	})
	.on('error', function(err) {
	alert("some error occurred: " + err);
	});