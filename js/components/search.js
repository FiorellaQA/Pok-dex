'use strict';

function search() {

	var icon;
	var containerSection = $('<section>', {
		class: 'container-fluid',
		id: 'app-search'
	});

	var row = $('<div>', {
		class: 'row'
	});

	var colLeft = $('<div>', {
		class: 'col-xs-8'
	});

	var input = $('<input>', {
		type: 'text',
		placeholder: 'Search for Pokémon'
	});

	/*icon = $('<span>', {
		class: 'glyphicon glyphicon-search',
		attr: {'aria-hidden: "true"'}
	});*/

	var colRight = $('<div>',{
		class: 'col-xs-4'
	});

	var button = $('<button>',{
		class:'buttonA-Z',
		html:'A-Z'
	});

	colLeft
		.append(input)
		/*.append(icon);*/

	colRight.append(button);

	row
		.append(colLeft)
		.append(colRight);

	containerSection.append(row);

	return containerSection;
}
