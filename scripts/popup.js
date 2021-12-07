// Get the modal
var modal = document.getElementById("pop-up");
var current_article = document.getElementById("modal-article");

// Get article boxes
var articles = document.getElementsByClassName("inner");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
for(var i = 0; i < articles.length; i++){
	articles[i].onclick = function() {
	  modal.style.display = "block";
	  current_article.innerHTML = this.innerHTML;
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}