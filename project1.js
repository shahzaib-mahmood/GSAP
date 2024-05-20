var rendomnumber = 0;

function bubblescreate() {
  var displayy = "";
  for (var i = 1; i <= 325; i++) {
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
}

function hitrn() {
  rendomnumber = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = rendomnumber;
}


var timecounter = 3;
function timerfuntion() {
  var intitialcounter = setInterval(() => {
    if (timecounter >1) {
      timecounter--;
      document.querySelector("#counter").innerHTML = timecounter;
    } else if(timecounter ===1){
      timecounter--;
      document.querySelector("#counter").innerHTML = timecounter;
      clearInterval(intitialcounter);  // Stop the timer when it equals to 1
      // Perform any additional actions needed when the timer stops
      document.querySelector(".goolaparent").innerHTML = " GameOver";

    }else {
      clearInterval(intitialcounter);
    }
  }, 1000);
}
var startscore = 0;
function score() {
  startscore += 10;
  document.querySelector("#scoree").textContent=startscore; 
}

document.querySelector(".gamecontainer").addEventListener("click", (e)=>{
  var clickednumber= (Number(e.target.textContent));

  if (clickednumber === rendomnumber){
    score();
    bubblescreate();
    hitrn();
    
  }
})


bubblescreate();
timerfuntion();
hitrn();
