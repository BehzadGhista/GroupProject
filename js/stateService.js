'use strict';

var ss = (function() {

  var questionIndex = 0;

  var postList = [];
  var answerList = [];

  var canidates = shuffleArray(["trump","clinton","sanders","kanye"]);
  var colors    = shuffleArray(["primary", "alert", "success", "warning"]);

  return {
    getQIndex: function() {
      return questionIndex;
    },
    getCanidates: function() {
      return canidates;
    },
    getColors: function() {
      return colors;
    }
  };

})();