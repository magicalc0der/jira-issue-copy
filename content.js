chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ( request.action === 'copy' ) {
    var titleEl = document.title;

    if (titleEl !== null) {
      titleEl=titleEl.replace(/\s+/g,"_");
      sendResponse(titleEl);
    }
  }
});
