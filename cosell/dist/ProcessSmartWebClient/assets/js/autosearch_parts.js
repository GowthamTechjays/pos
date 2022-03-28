/**
 * Looks at the input field and gets its ID (matXX).
 * A request to servlet was performed periodically.
 * Sends a request for parts to servlet GetParts, and fill
 */

$(function() {
	var active_searchid = -1;
	$(document).on("keyup", ".input_mat", function(event){
		var id = $(this).attr("id");
		
		$.ajax({
			  method: "GET",
			  url: "GetParts",
	          data: {
	              part_input: $(this).val(),
	          },
			})
			  .done(function(response) {
				  $('.search_mat_suggestion').hide();
				  $('#search_'+id).html(response);
				  $("#search_"+id).show();
			  })
			  .fail(function() {
				  $('#search_'+id).hide();
			  });
		active_searchid = id;
	});
	
	$(document).on("click", ".sugg_part", function(event){
		var value = $(this).html();
		$('#'+active_searchid).val(value);
		$('#search_'+active_searchid).hide();

	});
	
	$(document).on("keyup", ".input_maint", function(event){
		var id = $(this).attr("id");
		
		$.ajax({
			  method: "GET",
			  url: "GetMasterItem",
	          data: {
	              part_input: $(this).val(),
	          },
			})
			  .done(function(response) {
				  $('.search_mat_suggestion').hide();
				  $('#search_mat').html(response);
				  $("#search_mat").show();
			  })
			  .fail(function() {
				  $('#search_mat').hide();
			  });
		active_searchid = id;
	});
	
	$(document).on("click", ".sugg_maint", function(event){
		var value = $(this).html();
		$('#mat').val(value);
		$('#search_mat').hide();

	});
});