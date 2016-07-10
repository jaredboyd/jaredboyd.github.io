//initialize boolean value of home page
var titlePage = true;
var initialTitlePage = true;

//transition from the title page navigation to sidebar navigation
function transitionTitlePage() {
	var content = document.getElementById('content');
	if (titlePage === false) {
		return;
	}
	$(content).animate({width: '250px'});
	content.style.position='fixed';
	content.style.borderRight='solid #000000';
	titlePage = false;
	initialTitlePage = false;
}

function showPage(page) {
	var page = document.getElementById(page);
	if (!page) {
		alert("nope");
		return;
	}
	var pages = document.getElementsByClassName('page');
	for(var i = 0; i < pages.length; i++) {
		pages[i].style.display = 'none';
	}
	page.style.display = 'block';
}

function toggleShowPage() {
	/*var pages = document.getElementsByClassName('page');
	for(var i = 0; i < pages.length; i++) {
		pages[i].style.display = 'none';
	}*/
	if (initialTitlePage === true) {
		return;
	}
	if (titlePage === false) {
		var content = document.getElementById('content');

		$(content).animate({width: '100%'});
		titlePage = true;
	} else {
		transitionTitlePage();
	}
}