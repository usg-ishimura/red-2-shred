function openModal() {
  const popupWidth = 480;
  const popupHeight = 480;
  
  const screenWidth = screen.availWidth;
  const screenHeight = screen.availHeight;
  
  const left = Math.round((screenWidth - popupWidth) / 2);
  const top = Math.round((screenHeight - popupHeight) / 2);
  
  browser.windows.create({
    url: browser.runtime.getURL("modal.html"),
    type: "popup",
    width: popupWidth,
    height: popupHeight,
    left: left,
    top: top
  });
}

browser.browserAction.onClicked.addListener(openModal);
