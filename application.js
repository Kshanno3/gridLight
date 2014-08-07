var $newdiv1 = $( " <div class='.myBoxes.'/>"),
	newdiv2 = document.createElement( "div" ),
	existingdiv1 = document.getElementById( "#container" );
$(document).ready(function(){

	for(var i = 0; i< 4; i++){
		$("#container").append( $("<div></div>").addClass("myBoxes"));
		$("#container").append( $("<div></div>").addClass("myBoxes"));
		$("#container").append( $("<div></div>").addClass("myBoxes"));
		$("#container").append( $("<div></div>").addClass("myBoxes"));
		$("#container").append('<div style="clear:both;"></div>');
	
	
	}
	
	
	$("button").click(function(){
		$("#container").empty();
		var grid = prompt("Enter size of new grid:", "Number only");
		//newGrid(grid);
		var width = 930/grid;
		var height = 780/grid;
		var cont = "#container";
		var boxes = ".myBoxes";
		for(var i = 0; i < grid;i++){
			for(var x = 0; x < grid; x++){
			$(cont).append( $("<div></div>").addClass("myBoxes"));
			
			$(boxes).css('width', width);
			$(boxes).css('height',height);
			
			}
			$(cont).append('<div style="clear:both;"></div>');
		}
		$(boxes).hover(function(){$(this).addClass('newBox');});
	
	});
	/*
	function newGrid(var grid){
	
		for(var i = 0; i < grid;i++){
			for(var x = 0; x < grid; x++){
			$("#container").append( $("<div></div>").addClass("myBoxes"));
			
			}
			$("#container").append('<div style="clear:both;"></div>');
		}
	};*/
	//$(".myBoxes").on("hover", function(){
	//	$(this).addClass(".newBox");
	//});
	$('.myBoxes').hover(function(){$(this).addClass('newBox');});
	
	});

//$("#container").append("<div>Hello</div>");

//$('.myBoxes').mouseenter(function(){
	//	$(this).css("background-color:green");
	
	//}