// Get the Belly Button endpoint
const myURL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(myURL).then(({ names }) => {
    names.forEach(id => {
        d3.select('select').append('option').text(id);
    });

    optionChanged(names[0])
});

//Create function for charts
function optionChanged(id) {


    d3.json(myURL).then(({ metadata, samples }) => {
        
        //Build Metadata Sample
        let meta = metadata.find(obj=>obj.id==id);

        d3.select('.panel-body').html('');

        console.log(Object.entries(meta).forEach(([key,val])=> {

            d3.select('.panel-body').append('h6').text(`${key.toUpperCase()}: ${val}`)
        }));



        //Create bar chart
        var result = samples.find(sampleObj => sampleObj.id == id);
        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

        var barData = [
            {
                y: yticks,
                x: sample_values.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
            }
        ];

        var barLayout = {
            title: "Top 10 OTUs Found",
            margin: { t: 30, l: 150 }
        };

        Plotly.newPlot("bar", barData, barLayout);



        //Create a bubble chart
        var bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30 }
        };

        var bubbleData = [
            {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Earth"
                }
            }
        ];

        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

        //Gauge Chart
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: meta.wfreq,
              title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
              type: "indicator",
              mode: "gauge+number",
              delta: { reference: 400 },
              gauge: { axis: { range: [null, 10] } }
            }
          ];
          
          var layout = { width: 500, height: 400 };
          Plotly.newPlot('gauge', data, layout);
          
    });

};
//optionChanged("BB_940");
