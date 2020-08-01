// On extension click.
(() => {
	const isMainRepo = !document.location.pathname.includes('tree/');
	const getClassList = document.querySelector('.repository-content');
	isMainRepo &&
		getClassList &&
		getClassList.classList.toggle('rgh-files-hidden');
})();
