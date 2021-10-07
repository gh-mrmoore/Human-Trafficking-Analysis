function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/gh-mrmoore/AnalyticsFinalProject/Segment-2/Segment-2/Exports/eda5b.csv", function(data){ processData(data) } );

};
   
function processData(allRows) {

   console.log(allRows);
   var x = [];

   for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       x.push( row['ageCategories'] );
   }
   console.log( 'X',x);
   makePlotly(x);
}

function makePlotly(x){
   var plotDiv = document.getElementById("plot");
   var traces = [{
      x: x,
      type: 'histogram'
   }];

   var layout = {
    title: 'Human Traffick Victims by Age Category',
    xaxis: {
        categoryorder: "array",
        categoryarray: ["Age 0-8", "Age 9-17", "Age 18-20", "Age 21-23", "Age 24-26", "Age 27-29", "Age 30-38", "Age 39-47", "Age 48+"]}
  };

   Plotly.newPlot('plot', traces, layout);
};
 makeplot();


