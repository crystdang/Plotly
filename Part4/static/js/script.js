d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};

// SKILL DRILL Create a new directory, containing new index.html and script.js files. Use the D3.js library to create an event listener for a dropdown menu.
// Your dropdown menu should contain the following names: 
// Mickey, Minnie, Donald, Goofy. When a character (e.g., Minnie) is chosen from the dropdown menu by a user, the character's name should be printed to the browser console.