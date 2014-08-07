var $newdiv1 = $( " <div class='.myBoxes.'/>"),
	newdiv2 = document.createElement( "div" ),
	existingdiv1 = document.getElementById( "#container" );
$(document).ready(function(){
	$("#container").after( $("<div></div>").addClass("myBoxes"));
	$("#container").append( $("<div></div>").addClass("myBoxes"));
	
	});

//$("#container").append("<div>Hello</div>");

