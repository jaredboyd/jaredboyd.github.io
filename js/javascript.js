
//initialize boolean value of home page
var titlePage = true;

//transition from the title page navigation to sidebar navigation
function transitionTitlePage() {
	var navContent = document.getElementById('navContent');

	$(navContent).animate({width: '200px'});
	navContent.style.position='fixed';
	navContent.style.borderRight='solid #000000';
	titlePage = false;
}

//Shows the page content when clicked in nav bar
function showPage(page) {
	//Transition from title page if not already done
	if (titlePage === true) {
		transitionTitlePage();
	}

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

/* Shows title page again when logo is clicked
function toggleShowPage() {
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
*/