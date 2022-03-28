/**
 * This script removes a row of input for labors or materials
 */

$(function(){
	$(document).on("click", ".mat_del_btn", function(event){
		event.stopPropagation();
		let row_index = $(this).attr("id").substring(7);	//format: mdeleteX, where X is ID
		$("#mat_row"+row_index).remove();
	});
});

$(function(){
	$(document).on("click", ".lab_del_btn", function(event){
		event.stopPropagation();
		let row_index = $(this).attr("id").substring(7);	//format: ldeleteX, where X is ID
		$("#lab_row"+row_index).remove();
	});
});

$(function(){
	$(document).on("click", ".note_del_btn", function(event){
		event.stopPropagation();
		let row_index = $(this).attr("id").substring(7);	//format: ndeleteX, where X is ID
		$("#note_row"+row_index).remove();
	});
});