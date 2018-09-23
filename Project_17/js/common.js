
var input = document.getElementById('input');
var form = document.getElementById('form');

input.onblur = function() {
	this.style.color = "#414141";
	form.style.borderBottom = "1px solid #A981CC";
}
input.onfocus = function() {
	form.style.borderBottom = "1px solid #A981CC";
}

var inputBtn = document.getElementById('inputBtn');
var titleArr = document.getElementsByClassName('cardPr-title');
var allCards = document.getElementsByClassName('cardPr');
var openModal = document.getElementsByClassName('openModal');
var modalWin = document.getElementById('modal');
var closeModal = document.getElementById('closeModal');
var acceptButton = document.getElementById('accept');
var declineButton = document.getElementById('decline');

inputBtn.onclick = function(){
	var inputText = input.value.toLowerCase().trim();
	if (inputText) {
		for (var i = 0; i < titleArr.length; i++) {
			var titleCard = titleArr[i].textContent.toLowerCase();
			if(titleCard.includes(inputText)) {
				allCards[i].style.display = "block";
			} else {
				allCards[i].style.display = "none";
			}
		}
	} else {
		diplayAllCards();
	}
}

function diplayAllCards() {
	for (var i = 0; i < allCards.length; i++) {
		allCards[i].style.display = "block";
	}
}
var buttonSource;
for (var i = 0; i < openModal.length; i++){
	openModal[i].onclick = function() {
		buttonSource = window.event.srcElement;
		modalWin.style.display = "block";
		acceptButton.onclick = function() {
			card = buttonSource.parentNode.parentNode.parentNode.style.display = 'none';
			modalWin.style.display = "none";
		}
		closeModal.onclick = function() {
			modalWin.style.display = "none";
		}
		declineButton.onclick = function() {
			modalWin.style.display = "none";
		}
	}
}


