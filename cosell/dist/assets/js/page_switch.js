/**
 * This script controls the behavior of buttons/links for job number view pages
 */

$(function() {
	/*Back button clicked: hide all pages and show parent page
		Back button ID = back_[parent]
		eg. <a href='#' id='back_truck' class='back_btn'>
		Sidebar button ID = nav_[parent]
		eg. <li id="nav_truck" class="form_nav">
	*/
	$(document).on('click','.back_btn',function() {
		let parent_id = "nav_" + $(this).attr("id").substring(5);
		$("[id='"+parent_id+"']").click();
		$('.dashboard_content_nav').css("display","none");
		$("[id='"+parent_id+"_container']").css("display","block");
	});
	
	function displayResult(containerId, result) {
		$('.dashboard_content_nav').css("display","none");
		$("[id='"+containerId+"']").html(result);
		$("[id='"+containerId+"']").css("display","block");
	}
	
	//View Part clicked: parse ID (viewPartXXX) to get part ID and open part details page
	$(document).on('click','.viewPart',function() {
		$.ajax({
			  method: "POST",
			  url: "GetPartDetails",
	          data: {
	              partId: $(this).attr("id").substring(8),
	          },
			})
			.done(function(response) {
					displayResult('nav_part_details_container', response);
			  })
			  .fail(function() {
				  	displayResult('nav_part_details_container', "<h2>Error retrieving part details</h2><h3>Please Check your connection</h3>");
			  });
	});
	
	//View Part clicked: parse ID (viewInStockXXX) to get part ID and open part details page
	$(document).on('click','.viewInStock',function() {
		$.ajax({
			  method: "POST",
			  url: "GetPartInStock",
	          data: {
	              partId: $(this).attr("id").substring(11),
	          },
			})
			.done(function(response) {
					displayResult('nav_part_details_container', response);
			  })
			  .fail(function() {
				  	displayResult('nav_part_details_container', "<h2>Error retrieving part details</h2><h3>Please Check your connection</h3>");
			  });
	});
	
	//View Part clicked: parse ID (viewInUseXXX) to get part ID and open part details page
	$(document).on('click','.viewInUse',function() {
		$.ajax({
			  method: "POST",
			  url: "GetPartInUse",
	          data: {
	              partId: $(this).attr("id").substring(9),
	          },
			})
			.done(function(response) {
					displayResult('nav_part_details_container', response);
			  })
			  .fail(function() {
				  	displayResult('nav_part_details_container', "<h2>Error retrieving part details</h2><h3>Please Check your connection</h3>");
			  });
	});
	
	//View Part clicked: parse ID (viewInStockDetailsXXX) to get part ID and open part details page
	$(document).on('click','.viewInStockDetails',function() {
		$.ajax({
			  method: "POST",
			  url: "GetPartInStockDetails",
	          data: {
	              invId: $(this).attr("id").substring(18),
	          },
			})
			.done(function(response) {
					displayResult('nav_part_details2_container', response);
			  })
			  .fail(function() {
				  	displayResult('nav_part_details2_container', "<h2>Error retrieving part details</h2><h3>Please Check your connection</h3>");
			  });
	});
	
	//View Part clicked: parse ID (viewInUseDetailsXXX) to get part ID and open part details page
	$(document).on('click','.viewInUseDetails',function() {
		$.ajax({
			  method: "POST",
			  url: "GetPartInUseDetails",
	          data: {
	        	  invId: $(this).attr("id").substring(16),
	          },
			})
			.done(function(response) {
					displayResult('nav_part_details2_container', response);
			  })
			  .fail(function() {
				  	displayResult('nav_part_details2_container', "<h2>Error retrieving part details</h2><h3>Please Check your connection</h3>");
			  });
	});
	
	//View Service log for a particular part (ID = servicelog[partId])
	$(document).on('click','.viewServiceLog',function() {
		$.ajax({
			  method: "POST",
			  url: "GetServiceLog",
	          data: {
	              partId: $(this).attr("id").substring(10),
	          },
			})
			.done(function(response) {
					displayResult('nav_part_details_container', response);
			  })
			  .fail(function() {
				  	displayResult('nav_part_details_container', "<h2>Error retrieving service log</h2><h3>Please Check your connection</h3>");
			  });
	});
});