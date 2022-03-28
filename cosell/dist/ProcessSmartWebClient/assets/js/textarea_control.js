/**
 * This script prevents form submission when pressing the Enter key when filling textarea
 */

$(document).ready(function() {
  $(document).keydown(function(event){
    if(event.keyCode == 13 && !$(event.target).is("textarea")) {
      event.preventDefault();
      return false;
    }
  });
});