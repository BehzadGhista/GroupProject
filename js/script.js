
var posts = []; ///create empty posts array that will be filled by ajax calls

google.load("feeds", "1"); //tells google api to load the feeds api (version 1)

//3 Ajax calls made to fetch headlines and push them to posts array

function Bernie() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=bernie%20sanders&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        posts.push(entry.title);
      }
    }
  });
}

function Hillary() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=hillary%20clinton&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        posts.push(entry.title);
      }
    }
  });
}

function Trump() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=donald%20trump&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        posts.push(entry.title);
      }
    }
  });
}

function Kanye() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=kanye%20west&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        posts.push(entry.title);
      }
    }
  });
}

//Google Api specific information - KEEP THIS CODE
google.setOnLoadCallback(Bernie);
google.setOnLoadCallback(Hillary);
google.setOnLoadCallback(Trump);
google.setOnLoadCallback(Kanye);



var module = (function() {
  return {
    returnPosts: function() {
      return (processedPosts);
    },
    returnAnswers: function() {
      return (answerKey);
    }
  }
});



setTimeout(function() {
  process();
  //console logs to see what it looks like at each step ### TO REMOVE LATER
  console.log("Posts: " + posts + " Length: " + posts.length);
  console.log("Posts without Dupes: " + postsWithoutDupes + " Length: " + postsWithoutDupes.length);
  console.log("Answer Key: " + answerKey + " Length: " + answerKey.length);
  console.log("Processed Posts: " + processedPosts + " Length: " + processedPosts.length);
}, 3000);


function process() {
  removeDupes();
  rng();
  processPosts();
};


var postsWithoutDupes = [];
var answerKey = [];
var processedPosts = [];

///Filters out headlines with more than one candidate name
function removeDupes() {
  postsWithoutDupes = posts.filter(function(v) { // iterate over sentence array to filter
  return names.filter(function(w) { // iterate over names array and filter
    return v.indexOf(w) > -1; // get elements which contains in the sentence
  }).length == 1; // filter based on the filtered names array length
})
};


//RNG Function
var chosenPosts = [];

function rng() {
  for (var i=0; i < 5; i++) {
    var num = Math.floor((Math.random() * postsWithoutDupes.length));
    chosenPosts.push(postsWithoutDupes[num]);
  }
};

//Names to replace with '???'
var names = [
  "Donald Trump",
  "Hillary Clinton",
  "Bernie Sanders",
  "Kanye West"
];

///Replaces candidate name with ??? and pushes to processedPosts
///& pushes removed candidate name to the answerKey array
function processPosts() {
  processedPosts = chosenPosts.map(function(row){
    var matches = names.filter(function(name){return row.indexOf(name) > -1 });
    matches.forEach(function(match){answerKey.push(match); row = row.replace(match, '???')});
    return row;
})
};
