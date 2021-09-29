function makeplot() {
    Plotly.d3.csv("https://raw.githubusercontent.com/gh-mrmoore/AnalyticsFinalProject/MattMoore/Exports/eda5b.csv", function(data){ processData(data) } );

};
   
function processData(allRows) {

   console.log(allRows);
   var x = [];
  

   for (var i=0; i<allRows.length; i++) {
       row = allRows[i];
       x.push( row['yearOfRegistration'] );
   }
   console.log( 'X',x);
   makePlotly(x);
}

function makePlotly(x){
   var plotDiv = document.getElementById("plot");
   var traces = [{
        x: x, 
    //    transforms: [{
    //     type: 'groupby',
    //     groups: x
    //   }],
        y: x,
        transforms: [{
            type: 'aggregate',
            groups: x,
            aggregations: [
            {target: 'y', func: 'count', enabled: true}]
        }],
      type: 'scatter',
      mode: "lines+markers"
   }];


   Plotly.newPlot('plot', traces, //layout, 
       {title: 'Number of Registered Human Traffick Victims per Year'});
};
 makeplot();


