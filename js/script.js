var posts = [];

google.load("feeds", "1");

function Bernie() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=bernie%20sanders&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div);
        posts.push(entry.title);
      }
    }
  });
}

function Hillary() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=hillary%20clinton&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div)
        posts.push(entry.title);
      }
    }
  });
}

function Trump() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=donald%20trump&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div)
        posts.push(entry.title);
      }
    }
  });
}

function Kanye() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=kanye%20west&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div)
        posts.push(entry.title);
      }
    }
  });
}

function Paul() {
  var feed = new google.feeds.Feed("https://news.google.com/news?q=ron%20paul&output=rss");
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div)
        posts.push(entry.title);
      }
    }
  });
}

google.setOnLoadCallback(Bernie);
google.setOnLoadCallback(Hillary);
google.setOnLoadCallback(Trump);
google.setOnLoadCallback(Kanye);
google.setOnLoadCallback(Paul);