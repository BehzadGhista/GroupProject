'use strict';

$(document).foundation();

var questionIndex = 0;
var postList = [];
var answerList = [];

var canidates = shuffleArray(["trump","clinton","sanders","kanye"]);
var colors    = shuffleArray(["primary", "alert", "success", "warning"]);

init();

function init () {
   //buildSet();  
   clickWelcome();
};

function playGame() {
  postList = module.returnPosts();
  answerList = module.returnAnswers();
  buildSet();
  questionIndex = 0;
  changeHeadline();

  console.log("postList:");
  console.log(postList);
  console.log("answerList:");
  console.log(answerList);
}

function changeHeadline () {
  $( '#headline-slot' ).text(postList[questionIndex]);
}

function buildSet() {
  
  $( "#canidateRow" ).empty(); 

  canidates.forEach(function (ele, index) {
    addToPage(ele, index, colors[index]);
  });  

};

function clickWelcome() {
  $( '#welcome' ).click();
}

function getRando(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function shuffleArray(arr) {
  var temp = 0;
  var rando = 0;

  for (var i = 0; i < arr.length; i++){
       
    rando = getRando(0,arr.length);
    temp = arr[i];
    arr[i] = arr[rando];
    arr[rando] = temp;
  };
	
  return arr;
}

function addToPage (canidate, index, color) {

  var img = getImage(canidate);
  var name = getNickName(canidate);

  $('#canidateRow').append( $("<div></div>").addClass("small-2 large-3 columns")
                   .append( $('<div id="image-spot"></div>').addClass("callout small " + color )
                   .append( $('<img class="thumbnail" src="images/' + img + '">'))
                   .append( $('<button type="button" class="expanded ' + color + ' button"' +
                              ' id="' + canidate + '"' + 
                              ' onclick="answerQuestion(this.id)">' + name + '</button>'))
                   ));
};

function getImage (canidate){
  var rando = getRando(1,5);
  return canidate + rando + ".jpg";
};

function getNickName (canidate) {

  var TRUMP_NAMES   = ["Trump", "Donald", "Donald Trump", "D to the T"];
	var CLINTON_NAMES = ["Clinton", "Hillary", "Hillary Clinton", "H Dawg"];
	var SANDERS_NAMES = ["Sanders", "Bernie", "Bernie Sanders", "B Town"];
	var KAYNE_NAMES   = ["West", "Kayne", "Kayne West", "Kdubbs"];

	var rando = getRando(0,4);

	switch (canidate) {
	  case "trump":	
      return TRUMP_NAMES[rando];
      break;
	  case "clinton":	
      return CLINTON_NAMES[rando];
      break;
	  case "sanders":	
      return SANDERS_NAMES[rando];
      break;
	  case "kanye":	
      return KAYNE_NAMES[rando];
      break;
  }
};

function answerQuestion (who) {

  console.log(who);
  console.log(answerList[questionIndex]);
  //check answer...
  var img2 = "thumbsup.png";
 // $('#correct-or-not').append( $('<img class="thumbnail" src="images/' + img + '">'))
   //                ));
  $('#answerModal').foundation('open');
  questionIndex++; 
  updateProgressBar();
  buildSet();
  changeHeadline();
}

function updateProgressBar () {
  var percent = (questionIndex * 20);
  var update = "width: ";
  update += percent;
  update += "%";

  $('.progress-meter').attr("style",update);
  $('.progress-meter-text').text(percent + "%");
}

function clearModal (){
};