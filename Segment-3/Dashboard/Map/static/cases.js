// Store geojson file
var coordinates = './static/Selected_countries.geojson';

// Get request to the goejson
d3.json(coordinates, function(data){
    console.log(data);

    // Send the data.features object to the createFeatures function 
  createFeatures(data.features);
});

//  Create the createFeatures function to hold the data.features object
function createFeatures(countriesData) {

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing country's name and ISO_A3
    function onEachFeature(features, layer) {
      layer.bindPopup("<h2>" + features.properties.ADMIN 
      + "</h2><hr><h3>Alpha 3 code: " + features.properties.ISO_A3 + "</h3>");
    }
  
    // Create a GeoJSON layer containing the features array on the countriesData object
    // Run the onEachFeature function once for each piece of data in the array
    var countries = L.geoJSON(countriesData, {
      onEachFeature: onEachFeature
    });
  
    // Send our neighborhoods layer to the createMap function
    createMap(countries);
}

// Create the createMap function to hold 
// the map layers, basemaps, overlay object, map object, and layer control.
function createMap(countries) {

    // Define streetmap and darkmap layers
    var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: API_KEY
    });
  
    var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/dark-v10',
      accessToken: API_KEY
    });
  
    // Define a baseMaps object to hold our base layers
    var baseMaps = {
      "Street Map": streetmap,
      "Dark Map": darkmap
    };
  
    // Create overlay object to hold our overlay layer
    var overlayMaps = {
      "Traffick countries": countries,
    
    };
  
    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("map", {
      center: [42.32, -71.10],
      zoom: 4.5,
      layers: [streetmap, countries]
    });
  
    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);
  }
  
 
  
  










