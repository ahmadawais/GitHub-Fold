const isMainRepo = !document.location.pathname.includes('tree/');
const getClassList = document.querySelector('.repository-content').classList;
isMainRepo && getClassList.toggle('rgh-files-hidden');

// On load.
// chrome.extension.sendMessage({}, function (response) {
// 	var readyStateCheckInterval = setInterval(function () {
// 		if (document.readyState === 'complete') {
// 			clearInterval(readyStateCheckInterval);
// 			const isMainRepo = !document.location.pathname.includes('tree/');
// 			isMainRepo && document.querySelector('.repository-content').classList.toggle('rgh-files-hidden');
// 		}
// 	}, 10);
// });
