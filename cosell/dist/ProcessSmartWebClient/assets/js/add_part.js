/**
 * Open Add Part to Inventory container
 */
$(function() {
	//ADD INVENTORY
	$(document).on('click','#add_part_button',function() {
		$('.dashboard_content_nav').css("display","none");
		$("#nav_addpart_container").css("display","block");
	});
	
	//Parse ID = [action]_button TO nav_[action]_container
	$(document).on('click','.addnew_button',function() {
		let btn_id = $(this).attr("id");
		
		//Cut out the "_button" part at the end of ID
		btn_id = btn_id.substring(0,btn_id.length-7);
		
		//Display the appropriate page
		$('.dashboard_content_nav').css("display","none");
		$("#nav_"+btn_id+"_container").css("display","block");
	});
	
});