chrome.extension.sendMessage({}, function(response) {
    setInterval(clearAnnoyances, 500);
    clearAnnoyances()
});
function clearAnnoyances() {
  if(document.getElementsByClassName("permalink-inner").length !== 0) return;

  var promotedTweets = document.getElementsByClassName('promoted-tweet');
  for(var i in promotedTweets) {
    if(promotedTweets[i].remove)
      promotedTweets[i].remove()
  }
  var embededMedia = document.getElementsByClassName('cards-media-container')
  for(var i in embededMedia) {
    if(embededMedia[i].remove)
      embededMedia[i].remove()
  }
}
