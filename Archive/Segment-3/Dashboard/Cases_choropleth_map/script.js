// var mapboxAccessToken = 'pk.eyJ1IjoiZnJhbmNpc2NvMTMtMzAiLCJhIjoiY2tyYmFzcG5lNHJqbzJ2dDl3Z3duZmJiYyJ9.iecr3feoK8Whj4eZPueG8w';
var map = L.map('map',{
  center:[0,0], 
  zoom: 4,
  // layers: [streetmap,darkmap]
});
var API_KEY = 'pk.eyJ1IjoiZnJhbmNpc2NvMTMtMzAiLCJhIjoiY2tyYmFzcG5lNHJqbzJ2dDl3Z3duZmJiYyJ9.iecr3feoK8Whj4eZPueG8w';

var streetmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: API_KEY
    }).addTo(map);

var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/dark-v10',
      accessToken: API_KEY
    }).addTo(map);

var baseMaps = {
      "Street Map": streetmap,
      "Dark Map": darkmap
    };    


// var geojson = L.geoJson(casesData).addTo(map);



function getColor(d){
  return   d > 10000 ? '#800026' :
           d > 5000  ? '#BD0026' :
           d > 2500  ? '#E31A1C' :
           d > 1200  ? '#FC4E2A' :
           d > 600   ? '#FD8D3C' :
           d > 300   ? '#FEB24C' :
           d > 150   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.cases),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

// L.geoJson(casesData, {style: style}).addTo(map);

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature
  });
}

var geojson = L.geoJson(casesData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);

var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML = '<h4>US Human traffick around the world</h4>' +  (props ?
      '<b>' + props.ADMIN + '</b><br />' + props.cases + ' victims between 2002-2019'
      : 'Hover over a country');
};

info.addTo(map);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 150, 300, 600, 1200, 2500, 5000, 10000],
      labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(map);