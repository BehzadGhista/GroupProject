$(document).foundation();

init();

function init () {
   clickWelcome();
};

function playGame() {
  ss.postList = api.returnPosts();
  ss.answerList = api.returnAnswers();
  buildSet();
  ss.questionIndex = 0;
  ui.changeHeadline(ss.postList[ss.questionIndex]);

  console.log("postList:");
  console.log(ss.postList);
  console.log("answerList:");
  console.log(ss.answerList);
}

function buildSet() {
  var canidates = ss.getCanidates();
  var colors    = ss.getColors();

  $( "#canidateRow" ).empty(); 

  canidates.forEach(function (ele, index) {
    ui.addToPage(ele, index, colors[index]);
  });  
};

function answerQuestion (who) {

  console.log(who);
  console.log(ss.answerList[ss.questionIndex]);
  //check answer...
  var img2 = "thumbsdown.png";
  var imagePath = 'images/' + img2 ;
  $('#correct-or-not-img').attr("src", imagePath);

  $('#answerModal').foundation('open');
  ss.questionIndex++; 
  updateProgressBar();
  buildSet();
  ui.changeHeadline(ss.postList[ss.questionIndex]);
}

function updateProgressBar () {
  var percent = (ss.questionIndex * 20);
  var update = "width: ";
  update += percent;
  update += "%";

  $('.progress-meter').attr("style",update);
  $('.progress-meter-text').text(percent + "%");
}

function clickWelcome() {
  $( '#welcome' ).click();
}

function clearModal (){};