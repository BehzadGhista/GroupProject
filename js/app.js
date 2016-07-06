$(document).foundation();

init();

function init () {
   clickWelcome();
};

function playGame() {
  ss.postList = api.returnPosts();
  ss.answerList = api.returnAnswers();
  buildSet();
  console.log("playGame");
  $('#play-game').hide();
  $('#reset-game').show();
  updateProgressBar();
  ui.changeHeadline(ss.postList[ss.getQIndex()]);

  console.log("postList:");
  console.log(ss.postList);
  console.log("answerList:");
  console.log(ss.answerList);
}

function resetGame() {
  api.runReset();
  $('#play-game').show();
  $('#reset-game').hide();
  $( "#canidateRow" ).empty(); 
  ui.changeHeadline('Game Reset, please click Play...');
  ss.resetGame();
  updateProgressBar();
  $( "#progress-slot" ).text('game reset'); 
}

function buildSet() {
  ss.shuffle();
  var canidates = ss.getCanidates();
  var colors    = ss.getColors();
 
  $( "#canidateRow" ).empty(); 

  canidates.forEach(function (ele, index) {
    ui.addToPage(ele, index, colors[index]);
  });  

  var progress = 'Headline ' + (ss.getQIndex() + 1) + ' of 5';
  $( "#progress-slot" ).text(progress); 
};

function answerQuestion (who) {

  var answer = ss.answerList[ss.getQIndex()];
  var img2 = "thumbsdown.png";
  var response = "You are incorrect, I'm sorry.";
  var imagePath = 'images/';
  var retsultsText = "";

  console.log("user choice:");
  console.log(who);
  console.log("correct answer:");
  console.log(answer);

  if (checkAnswer(who,answer)) {
    img2 = "thumbsup.png";
    response = "You are correct!!";
    ss.bumpCorrect();
  }

  imagePath += img2 ;
  $('#correct-or-not-img').attr("src", imagePath);
  $('#correct-or-not').text(response);
  $('#correct-answer').text("That was " + answer);
  $('#og-post').text(ss.postList[ss.getQIndex()]);

  $('#answerModal').foundation('open');
  ss.bumpQIndex();
  updateProgressBar();
}

function nextQ(){
   if (ss.getQIndex() === 5){
    $('#end-results').text("You got " + ss.getCorrect() + " of 5 correct.");
    resetGame();
    $('#resultsModal').foundation('open');
  } else {
    buildSet();
    ui.changeHeadline(ss.postList[ss.getQIndex()]);
  } 
}

function updateProgressBar () {
  var correct = ss.getCorrect();
  var percent = (correct * 20);
  var update = "width: ";

  update += percent;
  update += "%";

  $('.progress-meter').attr("style",update);
  if (percent === 0) {
    $('.progress-meter-text').text("");
  } else {
    $('.progress-meter-text').text(percent + "%");
  }
}

function clickWelcome() {
  $( '#welcome' ).click();
}

function clearModal (){};

function checkAnswer(who, answer) {

 if (who === 'trump' && answer === 'Donald Trump'){
  return true;
 } else if (who === 'clinton' && answer === 'Hillary Clinton'){
  return true;
 } else if (who === 'sanders' && answer === 'Bernie Sanders'){
  return true;
 } else if (who === 'kanye' && answer === 'Kanye West'){
  return true;
 } 
 return false;
}