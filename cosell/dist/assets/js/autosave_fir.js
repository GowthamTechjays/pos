/**
 * Saves Form using Ajax Request
 * Once complete, redirect to page defined in 'redirectPage'
 */

$(function(){
	var formId = document.getElementById("formId").value;
	var responseDestination = "Dashboard.jsp";
	function saveForm() {
		$.ajax({
			  method: "POST",
			  url: "SubmitIncidentReport",
	          data: $("#form_nissho").serialize(),
			})
			  .done(function() {
				  window.location.replace(responseDestination);
			  })
			  .fail(function() {
				  alert( "Failed to save form" );
			  })
	}
	
	$(document).on('click','.autosave_button',function() {
		let btn_id = $(this).attr("id");
		//Change redirect destination when the form is saved
		if(btn_id === 'draft_btn'){
			responseDestination = "Dashboard.jsp";
		}
		//Save form input
		saveForm();
	});
});