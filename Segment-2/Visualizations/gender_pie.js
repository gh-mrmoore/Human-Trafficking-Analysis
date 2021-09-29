function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/gh-mrmoore/AnalyticsFinalProject/Segment-2/Segment-2/Exports/eda5b.csv", function(data){ processData(data) } );

};
   
function processData(allRows) {

   console.log(allRows);
   var x = [];
  
   for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       x.push( row['gender'] );
   }
   console.log( 'X',x);
   makePlotly(x);
}

function makePlotly(x){
   var plotDiv = document.getElementById("plot");
   var traces = [{
      labels: x,
      type: 'pie'
   }];

   var layout = {
    title: 'Victims by Gender',
    height: 400,
    width: 500
  };


   Plotly.newPlot('plot', traces, layout);
};
 makeplot();


