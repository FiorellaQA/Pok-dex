'use strict';

$(function () {

	$.getJSON("http://pokeapi.co/api/v2/pokemon/?limit=721&offset=0", function (data) {
		console.log(data);
		var pokemons = data.results;
		item(pokemons);
	});

	var template =  '<div class="col s12 m6 l3 pokecard" pokename="__pokename__" id="__id__">' +
						'<div class="card">' +
							'<div class="content-image">' +
								'<img src="__imgLink__" alt="__imgAlt__">' +
							'</div>' +
							'<div class="bg-curva">' +
								'<div class="listIcons">' +
									'<a class="modal-trigger" href="__nameLink__"><img src="assets/icon/pokeball_gray.png" alt="pokeball logo"></a>' +
									'<a href="#"><img src="assets/icon/valentines-heart.png" alt="heart logo"></a>' +
									'<a href="#"><img src="assets/icon/data.png" alt="intercambios logo"></a>' +
								'</div>' +
							'</div>' +
							'<div class="content-info"><p id="namePoke" class="center namePoke">__name__</p></div>' +
						'</div>' +
					'</div>';

	var templateModal = '<div class="modal-content container">' +
							'<div class="row">' +
								'<div class="col s12">' +
									'<h4 class="center namePoke">__name__</h4>' +
								'</div>' +
							'</div>' +
							'<div class="row">' +
								'<div class="col s6">' +
									'<div class="card">' +
										'<div class="content-image">' +
											'<img src="__imgLink__" alt="__imgAlt__">' +
										'</div>' +
										'<div class="bg-curva">' +
											'<div class="listIcons">' +
												'<a href="#"><img src="assets/icon/pokeball_gray.png" alt="pokeball logo"></a>' +
												'<a href="#"><img src="assets/icon/valentines-heart.png" alt="heart logo"></a>' +
												'<a href="#"><img src="assets/icon/data.png" alt="intercambios logo"></a>' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>' +
								'<div class="col s6">' +
									'<p>__description__</p>' +
									'<div class="bg-celeste box-description row">' +
										'<div class="col s6">' +
											'<p>Altura: </p> ' +
											'<span>__altura__</span>' +
											'<p>Peso: </p> ' +
											'<span>__peso__</span>' +
											'<p>Sexo: </p> ' +
											'<span></span>' +
										'</div> ' +
										'<div class="col s6">' +
											'<p>Categoria: </p> ' +
											'<span>__categoria__</span>' +
											'<p>Habilidad: </p> ' +
											'<span>__habilidad__</span>' +
										'</div> ' +
									'</div> ' +
									'<div class="tipo"> ' +
										'<p>Tipo:</p> ' +
											'<ul> ' +
												'<li class="bg">__tipo__</li> ' +
											'</ul> ' +
									'</div> ' +
									'<div class="debilidad"> ' +
										'<p>Debilidad:</p> ' +
											'<ul> ' +
												'<li class="bg">__debilidad__</li> ' +
											'</ul> ' +
									'</div> ' +
								'</div> ' +
							'</div> ' +
						'</div>';

	var contenedorGeneral = $('#app-body').find('#print');

	function item(pokemons) {
		var index = 0;

		pokemons.forEach(function (pokemon) {
			index++;
			var plantilla = template
				.replace('__imgLink__', 'http://serebii.net/art/th/' + index + '.png')
				.replace('__imgAlt__', pokemon.name + ' Logo')
				.replace('__nameLink__', '#' + pokemon.name)
				.replace('__name__', pokemon.name)
				.replace('__pokename__', pokemon.name)
				.replace('__id__', index);

			contenedorGeneral.append(plantilla);
			//contenedorGeneral.append(modal);
		});
	}

	$(document).on("click", ".pokecard",function(){

		var a = '<div id="modal1" class="modal"><div style="width: 100%; text-align: center;margin:50px 0px"><img src="http://4pon.es/foro/images/ranks/Pokeball.gif" width="37px" height="37px"/>&nbsp;<span>Cargando...</span></div></div>';
		$("#modalito").html(a);

		$('#modal1').modal();
		$("#modal1").modal("open");

		var id = $(this).attr("id");
		var url1 = "http://pokeapi.co/api/v2/pokemon/" + id + "/";
		var url2 = "http://pokeapi.co/api/v2/pokemon-species/" + id + "/";

		$.getJSON(url1, function (data) {
			$.getJSON(url2, function(data2){
				console.log(data, data2);

				var abilities = [];
				for(var i = 0; i < data.abilities.length; ++i){
					abilities[i] = data.abilities[i].ability.name;
				}

				var types = [];
				for(var i = 0; i < data.types.length; ++i){
					types[i] = data.types[i].type.name;
				}

				var pokepla = templateModal
						.replace('__name__', data.name)
						.replace('__imgLink__', 'http://serebii.net/art/th/' + id + '.png')
						.replace('__imgAlt__', data.name + ' Logo')
						.replace('__description__', data2.flavor_text_entries[3].flavor_text)
						.replace('__altura__', data.height/10 + ' .m')
						.replace('__peso__', data.weight/10 +' .Kg')
						.replace('__categoria__', data2.genera[2].genus)
						.replace('__habilidad__', abilities.join(", "))
						.replace('__tipo__', types.join(", "))
						.replace('__debilidad__', "")


					;


				$(".modal").html(pokepla);
			});
		});
	});


	$('#search').keyup(function(){
		var valueInput = $(this).val().toLowerCase().trim();
		$('.pokecard').hide();

		$(".pokecard").each(function(){
			if($(this).attr("pokename").toLowerCase().indexOf(valueInput) > -1){
				$(this).show();
			}
		});

	});

});
