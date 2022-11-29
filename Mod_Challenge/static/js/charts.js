function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
    console.log(result);
  });
}

// DELIVERABLE 1

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampleData= data.samples;
    console.log(sampleData);
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var testArray = sampleData.filter(sampleObj => sampleObj.id == sample);
    console.log(testArray);
    //  5. Create a variable that holds the first sample in the array.
    var testFirst = testArray[0];
    console.log(testFirst);
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = testFirst.otu_ids;
    console.log(otu_ids);
    var otu_labels = testFirst.otu_labels;
    console.log(otu_labels);
    var sample_values = testFirst.sample_values;
    console.log(sample_values);

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otu_ids.slice(0,10).map(label => "OTU " + label).reverse();
    console.log(yticks)
    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks,
      text: otu_labels,
      type: "bar",
      orientation: "h"
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
  });
}


// DELIVERABLE 2

// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    
    var sampleData= data.samples;
  
    var testArray = sampleData.filter(sampleObj => sampleObj.id == sample);

    var testFirst = testArray[0];

    var otu_ids = testFirst.otu_ids;
    console.log(otu_ids);
    var otu_labels = testFirst.otu_labels;
    console.log(otu_labels);
    var sample_values = testFirst.sample_values;
    console.log(sample_values);

    var yticks =  otu_ids.slice(0,10).map(label => "OTU " + label).reverse();
    console.log(yticks);

    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks,
      text: otu_labels,
      type: "bar",
      orientation: "h"
    }];
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };
    // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);
  

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: "Earth"
      }
    }];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title:'OTU ID'},
      //hovermode:
      automargin: true,
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  });
}

// DELIVERABLE 3

// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);
  
    // Create a variable that holds the samples array. 
    var sampleData = data.samples;
    var metadata = data.metadata;
    // Create a variable that filters the samples for the object with the desired sample number.
    var testArray = sampleData.filter(sampleObj => sampleObj.id == sample);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    // Create a variable that holds the first sample in the array.
    var testFirst = testArray[0];

    // 2. Create a variable that holds the first sample in the metadata array.
    var result = resultArray[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = testFirst.otu_ids;
    console.log(otu_ids);
    var otu_labels = testFirst.otu_labels;
    console.log(otu_labels);
    var sample_values = testFirst.sample_values;
    console.log(sample_values);

    // 3. Create a variable that holds the washing frequency.
    var wFreq = resultArray.map(sampleObj => sampleObj.wfreq);
      d3.json("samples.json").then(function(data){
        wfreq = data.metadata.map(person => person.wfreq)
      });
    var wFreq = wFreq[0];
    console.log(wFreq);

    // Create the yticks for the bar chart.
    var yticks =  otu_ids.slice(0,10).map(label => "OTU " + label).reverse();
    console.log(yticks);

    // Use Plotly to plot the bar data and layout.
    var barData = [{
      x: sample_values.slice(0,10).reverse(),
      y: yticks,
      text: otu_labels,
      type: "bar",
      orientation: "h"
    }];
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };

    Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    var bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: "Earth"
      }
    }];

    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: {title:'OTU ID'},
      //hovermode:
      automargin: true,
    };
    
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: wFreq,
      title: "Scrubs Per Week",
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: {range: [null, 10]},
        steps: [
          {range: [0,2], color: "red"},
          {range: [2,4], color: "orange"},
          {range: [4,6], color: "yellow"},
          {range: [6,8], color: "lightgreen"},
          {range: [8,10], color: "green"}
        ],
        bar: {color: "black"}
      }
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      autosize: true, 
      title: "<b>Belly Button Washing Frequency</b>"
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}

d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var selectedOption = dropdownMenu.value;

  console.log(selectedOption);
  buildCharts(selectedOption)
};