/**
 * Add or Remove X
 */
$(function() {
	//ADD
	$(document).on('click','#add_vendor_button',function() {
		$('.dashboard_content_nav').css("display","none");
		$("#nav_add_vendor_container").css("display","block");
	});
	
	$(document).on('click','#add_service_request_button',function() {
		$('.dashboard_content_nav').css("display","none");
		$("#nav_add_service_request_container").css("display","block");
	});
});