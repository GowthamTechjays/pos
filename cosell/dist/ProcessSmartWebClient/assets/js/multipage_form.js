/**
 * Handles the behavior of multipage form
 */

$(function() {
	//Parse ID: button_[ID]
	$(document).on('click','.next_button',function() {
		let nextPageId = $(this).attr("id").substring(7);
		
		$('.page_fragment').css("display","none");
		$("#page"+nextPageId).css("display","block");
	});
	
	$(document).on('click','.back_button',function() {
		let nextPageId = $(this).attr("id").substring(11);
		
		$('.page_fragment').css("display","none");
		$("#page"+nextPageId).css("display","block");
	});
	
	$(document).on('click','.area_button',function() {
		$('.page_fragment').css("display","none");
		$("#page2").css("display","block");
	});
});