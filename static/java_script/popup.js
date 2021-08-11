var modal1 = document.getElementById("news_Modal_1");
var modal2 = document.getElementById('news_Modal_2');
var modal3 = document.getElementById('news_Modal_3');

// Get the button that opens the modal
var btn1 = document.getElementById("open_popup_news_1");
var btn2 = document.getElementById("open_popup_news_2");
var btn3 = document.getElementById('open_popup_news_3');

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {

  modal2.style.display = "block";
}

btn3.onclick = function() {
  modal3.style.display = "block";
}





// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";

}
span2.onclick = function(){

  modal2.style.display = "none";
}

span3.onclick = function(){

  modal3.style.display = "none";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
