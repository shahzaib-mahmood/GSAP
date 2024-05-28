let list = document.querySelector(".listitems");
let leftbox = document.querySelector(".left");
let  rightbox= document.querySelector(".right");
 
    for (list of list) {
        list.addEventListener("dragstart", function (e) {
            let selected = e.target;

            rightbox.addEventListener("dragover", function (e) {
                e.preventDefault();    
            });

            rightbox.addEventListener("drop", function (e) {
                rightbox.appendChild(selected);
                selected= null;
            })
            
        })
    }