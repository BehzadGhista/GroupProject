'use strict';

var ss = (function() {

  var questionIndex = 0;
  var correctAnswers = 0;

  var postList = [];
  var answerList = [];
  var canidates = [];
  var colors    = [];

  function resetGame() {
    questionIndex = 0;
    correctAnswers = 0;
    postList = [];
    answerList = [];
  }

  function shuffle() {
    canidates = shuffleArray(["trump","clinton","sanders","kanye"]);
    colors    = shuffleArray(["primary", "alert", "success", "warning"]);
  }

  return {
    getQIndex: function() {
      return questionIndex;
    },
    bumpQIndex: function() {
       questionIndex++;
    },
    getCanidates: function() {
      return canidates;
    },
    getColors: function() {
      return colors;
    },
    resetGame: function() {
      resetGame();
    },
    bumpCorrect: function() {
      correctAnswers++;
    },
    getCorrect: function() {
      return correctAnswers;
    },
    shuffle: function() {
      shuffle();
    }
  };

})();