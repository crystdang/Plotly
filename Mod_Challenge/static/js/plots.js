// create dropdown:
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      // PANEL.append("h6").text(["ID: " + result.id]);
      // PANEL.append("h6").text(["ETHNICITY: " + result.ethnicity]);
      // PANEL.append("h6").text(["GENDER: " + result.gender]);
      // PANEL.append("h6").text(["AGE: " + result.age]);
      // PANEL.append("h6").text(["LOCATION: " + result.location]);
      // PANEL.append("h6").text(["BBTYPE: " + result.bbtype]);
      // PANEL.append("h6").text(["WFREQ: " + result.wfreq]);
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }
  // SKILL DRILL Open VS Code and modify the buildMetadata() function to populate the Demographic Info panel 
  // with the rest of the demographic data when a menu option is selected:
  // ID, ETHNICITY, GENDER, AGE, LOCATION, BBTYPE, WFREQ