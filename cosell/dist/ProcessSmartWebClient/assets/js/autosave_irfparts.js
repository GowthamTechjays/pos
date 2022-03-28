/**
 * Saves Form using Ajax Request
 * Once complete, redirect to page defined in 'redirectPage'
 */

$(function(){
	function saveParts() {
		$.ajax({
			  method: "POST",
			  url: "SubmitIrrigationParts",
	          data: $("#form_nissho").serialize(),
			})
	}
	
	$(document).on('click','#scan_button',function() {
		//Save form input
		saveParts();
		//Call Android Scanner function
        Android.startScan();
	});
});