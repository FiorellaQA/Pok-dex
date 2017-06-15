'use strict';



$(function() {
	$.getJSON("http://pokeapi.co/api/v2/pokedex/1/", function (response) {
			var pokemons = response.pokemon_entries;
			item(pokemons);
		});
});

function item(pokemons) {
	var i = 0;
	pokemons.forEach(function (pokemon) {
 	i++;
	var col = $('<div>',{
		class: 'col-xs-6 col-md-3'
	});

	var anchor = $('<a>',{
		href:'#',
		class: 'thumbnail'
	});

	var name = $('<p>',{
		html:pokemon.pokemon_species.name
	});

	var img = $('<img>',{
		src:'http://serebii.net/art/th/' + i + '.png',
		alt:pokemon.pokemon_species.name + ' Logo'
	});

	anchor.append(img);
	col
		.append(anchor)
		.append(name);

	$('#print').append(col);
	});
}

	/* $.ajax({
		url:'http://pokeapi.co/api/v2/pokedex/1/',
	 $(function() {





	*/

