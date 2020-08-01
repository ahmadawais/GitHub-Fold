const isMainRepo = !document.location.pathname.includes('tree/');
const getClassList = document.querySelector('.repository-content').classList;
isMainRepo && getClassList.toggle('rgh-files-hidden');
