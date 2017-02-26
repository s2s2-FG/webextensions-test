//calculate difference from starting time to current time
function renderItem(sTime) {
	var now = new Date().getTime();
	var diff = Math.round((now - sTime.time) / 1000);

	//update time difference to popup element
	var dom_time = document.querySelector('#testResult');
	dom_time.innerHTML = diff;
};

function renderTime() {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
    //send a request for start time
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'getStartTime'},
		renderItem);
  });
};

document.addEventListener('DOMContentLoaded', function() {
	//update time every second
	renderTime();
	window.setInterval(renderTime, 1000);
});