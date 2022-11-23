const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// no results:
// d3.json(url).then(spaceXResults => 
    // console.log(spaceXResults.location.latitude));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

// SKILL DRILL unsolved Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
// var locationLat = d3.json(url).then(receivedData.map(location => location.location.latitude));
d3.json(url).then(receivedData => console.log(receivedData.map(location => location.location.latitude)));
d3.json(url).then(receivedData => console.log(receivedData.map(location => location.location.longitude)));

d3.json("samples.json").then(function(data){
    console.log(data);
});

// only wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// descending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// delete null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

// access both key value pairs ie:
// console.log(Object.entries(researcher1));

// to print all, arbitrary first and second names can be anything else
// researcher1.forEach(([first, second]) => console.log(first
// + ": " + second));

// SKILL DRILL Use Object.entries() and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});