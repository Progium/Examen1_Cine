'use strict';

AppServices.service('ServicioPeliculas', function(){
	this.datosPelicula = function(){
		return[
			{
				nombre: "Avengers:La Era de Ultron",
      			fecha: "25 mayo del 2015",
      			tandaSeleccionada: "11:00 AM",
      			tandas: [
        			{hora: "11:00 AM"},
        			{hora: "01:00 PM"},
        			{hora: "05:00 PM"}
      			]
      		},
      		{
			    nombre: "Heroe del Centro Comercial 2",
			    fecha: "26 mayo del 2015",
			    tandaSeleccionada: "11:00 AM",
			    tandas: [
			     	{hora: "11:00 AM"},
			        {hora: "01:00 PM"},
			        {hora: "05:00 PM"}
			    ]
    		}, 
    		{
      			nombre: "Mad Max:Furia En El Camino",
      			fecha: "27 mayo del 2015",
      			tandaSeleccionada: "11:00 AM",
      			tandas: [
        			{hora: "11:00 AM"},
        			{hora: "01:00 PM"},
        			{hora: "05:00 PM"}
      			]
    		},
    		{
      			nombre: "Maten al Mensajero",
      			fecha: "28 mayo del 2015",
      			tandaSeleccionada: "11:00 AM",
      			tandas: [
        			{hora: "11:00 AM"},
        			{hora: "01:00 PM"},
        			{hora: "05:00 PM"}
      			]
    		},
    		{
      			nombre: "Zapatero a tus Zapatos",
      			fecha: "29 mayo del 2015",
      			tandaSeleccionada: "11:00 AM",
      			tandas: [
        			{hora: "11:00 AM"},
        			{hora: "01:00 PM"},
        			{hora: "05:00 PM"}
      			]
    		},
    		{
      			nombre: "Rapidos y Furiosos 7",
      			fecha: "30 mayo del 2015",
      			tandaSeleccionada: "11:00 AM",
      			tandas: [
        			{hora: "11:00 AM"},
        			{hora: "01:00 PM"},
        			{hora: "05:00 PM"}
      			]
      		}
		]
	}
});
