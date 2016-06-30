'use strict';

$(document).foundation();

init();

function init () {
   //buildSet();  
};

function buildSet() {
  
  $( "#canidateRow" ).empty(); 

  var canidates = shuffleArray(["trump","clinton","sanders","kayne"]);
  var colors    = shuffleArray(["primary", "alert", "success", "warning"]);

  canidates.forEach(function (ele, index) {
    addToPage(ele, index, colors[index]);
  });  

};

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
                   .append( $("<div></div>").addClass("callout small " + color )
                   .append( $('<img class="thumbnail" src=' + img + '>'))
                   .append( $('<button type="button" class="expanded ' + color + ' button">' + name + '</button>'))
                   ));
};

function getImage (canidate){

  var TRUMP_IMG   = ['"https://uploads.disquscdn.com/images/0c8f874ffc00bc583b30e8a8fbe1d91ea1898bf0387a9b7142c609aed2d40ef0.jpg"',
                     '"http://america.aljazeera.com/content/ajam/articles/2015/6/30/tv-companies-cut-ties-with-trump/_jcr_content/image.adapt.480.low.Trump_NBC_063015.jpg"',
                     '"http://cbsnews2.cbsistatic.com/hub/i/r/2015/08/07/d6cba2e5-591e-41a3-8d5d-cdb45830b74f/thumbnail/620x350/6cf8010874685780481ef7d3223036ec/donald-trump-483208412.jpg"',
                     '"http://cbsnews2.cbsistatic.com/hub/i/r/2016/02/03/7e524c2d-3bfc-4b4d-8d11-21326dcd7896/thumbnail/620x350/b3455383c47ffb587d6543d1e74185f9/make-america-great-again-trump.jpg"'
	                  ];
  var CLINTON_IMG = ['"https://upload.wikimedia.org/wikipedia/commons/3/3b/Hillary_Clinton_(24005922924).jpg"'
	                  ];
  var SANDERS_IMG = ['"http://cfvod.kaltura.com/p/557781/sp/55778100/thumbnail/entry_id/1_i94mu27g/version/100022/acv/92/width/618/height/378"' 
	                  ];
  var KAYNE_IMG   = ['"http://media.salon.com/2016/02/kanye_west3.jpg"'
	                  ];

  var rando = getRando(0,4);

  switch (canidate) {
    case "trump":
       return TRUMP_IMG[rando];
       break;
    case "clinton":
       return '"https://upload.wikimedia.org/wikipedia/commons/3/3b/Hillary_Clinton_(24005922924).jpg"';
       break;
    case "sanders":
       return '"http://cfvod.kaltura.com/p/557781/sp/55778100/thumbnail/entry_id/1_i94mu27g/version/100022/acv/92/width/618/height/378"';
       break;
    case "kayne":
       return '"http://media.salon.com/2016/02/kanye_west3.jpg"';
       break;
    default:
       return '';
       break;
  }
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
	  case "kayne":	
      return KAYNE_NAMES[rando];
      break;
  }
};