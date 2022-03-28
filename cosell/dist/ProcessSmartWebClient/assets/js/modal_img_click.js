/**
 * Handles the behavior of images in the form when clicked.
 */

$(function() {
	$(document).on("click", ".uploaded_img", function(event){
		var modal = document.getElementById('imgModal');
		console.log(modal);
		var modalImg = document.getElementById("imgPreview");
		console.log(modalImg);
		var id = $(this).attr('id');
		console.log(id);
		modal.show();
	    modalImg.src = this.src;
	});

	$(document).on("click", ".close_modal_btn", function(event){
		var modal = document.getElementById('imgModal');
		modal.hide();
	});
});