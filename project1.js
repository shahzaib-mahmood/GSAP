var displayy = "";

for (var i = 1; i <= 360; i++) {
  var generatenumber = Math.floor(Math.random() * 10);
  displayy += `<h2 class="goola">${generatenumber}</h2>`;
}
var goolaParentElement = document.querySelector(".goolaparent");
if (goolaParentElement) {
  // Set the innerHTML of the selected element to the displayy string
  goolaParentElement.innerHTML = displayy;
} else {
  console.error("Element with class 'goolaparent' not found.");
}
