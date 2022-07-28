function openTab(evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("content__inner");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}

//Horizontal scroll for the tabs on mousewheel. If tabs are longer than the content section, there's a scroll bar but it's hidden to retain the design.
if (window.innerWidth > 800) {
	const scrollContainer = document.querySelector(".tabs");

	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});
}

// Popover for hover fact
$(function () {
    $('[data-toggle="popover"]').popover({
    })
  })

  // Popover for subscribe button in footer
function formPopover() {
	var input = document.getElementById('userinput');
	console.log(input)
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (input.value.match(validRegex)) {
		$('#form-popover').popover('toggle');
	} else {
	  alert("Invalid email address, please try again.");
	  $('#form-popover').popover('hide');
	}
} 
