chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if ( request.action === 'copy' ) {
    var titleEl = document.title;

    if (titleEl !== null) {
      sendResponse(titleEl.replace(/\s+/g,"_").replace(/\[/g, '').replace(/\]/g, ''));
    }
  }
});
