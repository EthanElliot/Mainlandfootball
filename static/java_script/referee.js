var modal1 = document.getElementById("referee_Modal_1");


// Get the button that opens the modal
var btn1 = document.getElementById("referee_order0");
var btn2 = document.getElementById("referee_order1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
  }

btn2.onclick = function() {
    modal1.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
}
