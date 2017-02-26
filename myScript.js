//to remember starting time of the tab
var startTime = new Date;

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
	//make sure message comes from popup
	if ((msg.from === 'popup') && (msg.subject === 'getStartTime')) {
		var sTime = {
			time:	startTime.getTime()
		};

		//send back starting time
		response(sTime);
	}
});