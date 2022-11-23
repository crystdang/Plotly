Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
Plotly.newPlot("plotArea", [{x:[5,10,15],y:[10,20,30]}]);
var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

Plotly.newPlot("plotArea", trace);

var trace = [{
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}];
var layout = {
    title: "Non-Alcoholic Beverage Orders",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent of Drinks Ordered"}
};
Plotly.newPlot("plotArea", trace, layout);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

var numbers = [0,2,4,6,8];

var addfive = numbers.map(function(integer) {
    return integer + 5;
    });

console.log(numbers)
console.log(addfive)

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

//SKILL DRILL animal names starting with S, unsolved
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b).reverse();
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

var slice2 = words.slice(0,2);
var slice3 = words.slice(3, );