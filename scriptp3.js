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
