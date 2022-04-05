/**
 * Requirement: an input field '#update_servlet' containing Update Proposal Servlet name
 * A request to servlet was performed periodically.
 * Each request saves the form data to the database
 */

$(function(){
	var updateServletName = $("#form_nissho").attr("action"); //Update servlet's name
	var responseDestination = "Dashboard.jsp";	//Redirect Destination after request
	/*function worker() {
		$.ajax({
			  method: "POST",
			  url: updateServlet,
	          data: $("#form_nissho").serialize(),
			})
			  .done(function() {
				  alert( "save success" );
			  })
			  .fail(function() {
				  alert( "save error" );
			  })
			  .always(function() {
				  // Schedule the next update after 30 seconds when the current one's complete
			      setTimeout(worker, 30000);
			  });
		}
	worker(); //Initial call
	*/
	
	function saveForm() {
		$.ajax({
			  method: "POST",
			  url: updateServletName,
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