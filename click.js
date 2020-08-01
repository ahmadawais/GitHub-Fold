// On extension click.
(() => {
	const isMainRepo = !document.location.pathname.includes('tree/');
	isMainRepo && document.querySelector('.repository-content').classList.toggle('rgh-files-hidden');
})();
