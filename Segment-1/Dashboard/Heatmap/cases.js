// Store geojson file
var casesURL = 'cases_countries.geojson';
let coordinatesURL = 'https://raw.githubusercontent.com/gh-mrmoore/AnalyticsFinalProject/Fco_branch/Segment-1/Dashboard/Map/static/Selected_countries.geojson';
let victimsURL = 'https://raw.githubusercontent.com/gh-mrmoore/AnalyticsFinalProject/Fco_branch/Segment-1/Dashboard/Cleanup/Victims.json';


// Store geojson file
var countriesURL = 'Selected_countries.geojson';

// d3.json(coordinatesURL).then(
//   (data, error) => {
//       if(error){
//           console.log(error) 
//       } else {
//           coordinatesData = data.features
//           console.log(coordinatesData)

//           d3.json(victimsURL).then(
//               (data,error)=> {
//                   if(error){
//                       console.log(error)
//                   }else {
//                       victimsData = data
//                       console.log(victimsData)
//                       // drawMap()
//                   }
//               }
//           )

//       }
//   }
// )
// Get request to the goejson
d3.json(casesURL, function(casesData){
  d3.json(countriesURL, function(countriesData){  
  console.log(casesData);
  console.log(countriesData);

    // Send the data.features object to the createFeatures function 
  createLayers(casesData.features, countriesData.features);
  })
});
// let numberofvictims = features.properties.cases
//   console.log(numberofvictims)


  function colorDisplay(numberofvictims){
    if (numberofvictims > 10000) return "purple";
    else if (numberofvictims > 5000) return "Red";
    else if (numberofvictims > 1000) return "Orange";
    else  return "blue";
    
    };
//  Create the createFeatures function to hold the data.features object
function createLayers(casesData, countriesData) {

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing country's name and ISO_A3
    function onEachFeature(features, layer) {
      layer.bindPopup("<h2>" + features.properties.country_x 
      + "</h2><hr><h3>Alpha 3 code: " + features.properties.iso_a3 + "</h3>"  + "<br></h2><hr><h3> Cases: " + features.properties.cases );
    }
  
    // Create a GeoJSON layer containing the features array on the countriesData object
    // Run the onEachFeature function once for each piece of data in the array
    var cases = L.geoJSON(casesData, {
     pointToLayer: function (features, latlng){
       return new L.circle(latlng,{
         radius: (features.properties.cases) * 95,
        //  color: 'green',
         fillcolor: colorDisplay(features.properties.cases),
         opacity: 0.3,
         fillOpacity: 0.3
       })
     },
      onEachFeature: onEachFeature
    });
    var countries = L.geoJSON(countriesData, {
      // onEachFeature: onEachFeature
    });
    // Send our neighborhoods layer to the createMap function
    createMap(cases, countries);
}

// Create the createMap function to hold 
// the map layers, basemaps, overlay object, map object, and layer control.
function createMap(cases, countries) {

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
  
    // var cases = new L.LayerGroup();
    // var countries = new L.LayerGroup()

    // Create overlay object to hold our overlay layer
    var overlayMaps = {
      "Traffick countries": countries,
      "Cases": cases 
    
    };
  
    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("map", {
      center: [42.32, -71.10],
      zoom: 4.5,
      layers: [streetmap, countries, cases]
    });
  
    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);

    var legend = L.control({position: 'bottomright'});
legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'info legend'),
  numberofvictims = ["20", "1000", "5000", "10000"];
      // color = ["green", "yellow", "blue", "orange", "red", "purple"];
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < numberofvictims.length; i++) {
      div.innerHTML +=
          '<i style="background:' + colorDisplay(numberofvictims[i] ) + '"></i> ' +
          numberofvictims[i] + (numberofvictims[i+1] ? '&ndash;' + numberofvictims[i + 1] + '<br>' : '+');
  }
  return div;
};
legend.addTo(myMap);
  }




  
  










