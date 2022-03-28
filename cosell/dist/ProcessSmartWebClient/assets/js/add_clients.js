/**
 * Add or Remove Clients
 */
$(function() {
	//ADD
	$(document).on('click','#add_client_button',function() {
		$('.dashboard_content_nav').css("display","none");
		$("#nav_addclient_container").css("display","block");
	});
	
	//REMOVE
	$(document).on('click','#remove_client_button',function() {
		$('.dashboard_content_nav').css("display","none");
		$("#nav_removeclient_container").css("display","block");
	});
});