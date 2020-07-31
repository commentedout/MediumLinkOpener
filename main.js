chrome.runtime.onStartup.addListener(function() {
  // When the app gets installed, set up the context menus
  setUpContextMenus();
});

function setUpContextMenus() { 


chrome.contextMenus.create({
	id: "MEDIUM-OPEN-INCOGNITO-CTX-MENU",
    title: "Read this Medium article",
    contexts: ["link"]
  });

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "MEDIUM-OPEN-INCOGNITO-CTX-MENU") {
		var url = info.linkUrl.split('?')[0];
        chrome.windows.create({"url": url, "incognito": true});
    }
});

}

