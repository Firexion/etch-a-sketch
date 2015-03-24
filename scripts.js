var GRID_SIZE = 16;
var table_size = 960;

$(document).ready(function() {
	setUpGrid(GRID_SIZE);
	$("#reset").click(function() {
		$("#grid").html("");
		var sides = prompt("How many sides do you want?");
		setUpGrid(parseInt(sides));
	});
});


var setUpGrid = function(size) {
	var cell_size = table_size / size;
	var grid = $("#grid");
	for (var i = 0; i < size; i++) {
		var row = $('<div/>', {
		    id: 'row-' + i,
		    class: 'row'
		});
		row.appendTo(grid);
		for (var j = 0; j < size; j++) {
			$('<div/>', {
			    id: 'cell-' + i + "-" + j,
			    class: 'cell',
			    style: 'width: ' + cell_size + "px; height: " + cell_size + "px;"
			}).appendTo(row);
		}
	}

	$(".cell").hover(function() {
		$(this).addClass('filled');
	});
};
