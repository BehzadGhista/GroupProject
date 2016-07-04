'use strict';

var ui = (function() {

   function changeHeadline (headline) {
     $( '#headline-slot' ).text(headline);
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

  return {
    returnPosts: function() {
      return (processedPosts);
    },
    returnAnswers: function() {
      return (answerKey);
    },
    changeHeadline: function(headline) {
      changeHeadline(headline);
    },
    addToPage: function(canidate, index, color) {
    	addToPage(canidate, index, color);
    }
  };

})();