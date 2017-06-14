'use strict';

function header () {
	var container = $('<header>',{
		class: 'container-fluid',
		id:'app-header'
	});

	var row = $('<div>',{
		class: 'row'
	});

	var col = $('<div>',{
		class: 'col-xs-12 text-center'
	});

	var title = $('<h1>',{ 
		html:'Pokédex' ,
		class:'title'
	});  

	col.append(title);
	row.append(col);
	container.append(row);

	return container;
}

