/**
 * Handles dashboard navigation upon navigation click
 * 
 */

$(function() {
	//Mobile navbar
	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
	        $(this).collapse('hide');
	    }
	});
	
	$(document).on("click", ".nav li", function(event){
		if($(this).attr("id").startsWith("nav_form_")){
			let prefix = $(this).attr("id").substring(9);
			$( "."+prefix+"_submenu" ).toggle(200);
		}
		else{
			//CONTENT
			//Change active navigation
			$(".nav li").removeClass("active");
		    $(this).addClass("active");
		}
	});
});