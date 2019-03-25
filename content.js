chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ( request.action === 'copy' ) {
    var numberEl = document.getElementById("issuekey-val");
    var titleEl = document.getElementById("summary-val");

    if ( numberEl !== null && titleEl !== null ) {
      var issueNumber = numberEl.textContent;
      var issueDescription = titleEl.textContent;
      sendResponse(issueNumber + " " + issueDescription);
    }
  }
});
