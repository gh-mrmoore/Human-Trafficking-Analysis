function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/gh-mrmoore/AnalyticsFinalProject/Segment-2/Segment-2/Exports/eda5b.csv", function(data){ processData(data) } );

};
   
function processData(allRows) {

   console.log(allRows);
   var x = [];
  

   for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       x.push( row['Labor_Type'] );
   }
   console.log( 'X',x);
   makePlotly( x);
}

function makePlotly( x){
   var plotDiv = document.getElementById("plot");
   var traces = [{
       x: x, 
       type: 'histogram'
   }];


   Plotly.newPlot('plot', traces, //layout, 
       {title: 'Number of Human Traffick Victims by Labor Type'});
};
 makeplot();


