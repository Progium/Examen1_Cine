'use strict';

/**
 * PeliculasController
 * @constructor
 */

App.controller('PeliculasController', function($scope, $location) {
  $scope.listaPeliculas = [{
    nombre: "Avengers:La Era de Ultron",
    fecha: "25 mayo del 2015",
    tandaSeleccionada: "11:00 AM",
    tandas: [{
      hora: "11:00 AM"
    }, {
      hora: "01:00 PM"
    }, {
      hora: "05:00 PM"
    }]
  }, {
    nombre: "Heroe del Centro Comercial 2",
    fecha: "26 mayo del 2015",
    tandaSeleccionada: "11:00 AM",
    tandas: [{
      hora: "11:00 AM"
    }, {
      hora: "01:00 PM"
    }, {
      hora: "05:00 PM"
    }]
  }, {
    nombre: "Mad Max:Furia En El Camino",
    fecha: "27 mayo del 2015",
    tandaSeleccionada: "11:00 AM",
    tandas: [{
      hora: "11:00 AM"
    }, {
      hora: "01:00 PM"
    }, {
      hora: "05:00 PM"
    }]
  }, {
    nombre: "Maten al Mensajero",
    fecha: "28 mayo del 2015",
    tandaSeleccionada: "11:00 AM",
    tandas: [{
      hora: "11:00 AM"
    }, {
      hora: "01:00 PM"
    }, {
      hora: "05:00 PM"
    }]
  }, {
    nombre: "Zapatero a tus Zapatos",
    fecha: "29 mayo del 2015",
    tandaSeleccionada: "11:00 AM",
    tandas: [{
      hora: "11:00 AM"
    }, {
      hora: "01:00 PM"
    }, {
      hora: "05:00 PM"
    }]
  }, {
    nombre: "Rapidos y Furiosos 7",
    fecha: "30 mayo del 2015",
    tandaSeleccionada: "11:00 AM",
    tandas: [{
      hora: "11:00 AM"
    }, {
      hora: "01:00 PM"
    }, {
      hora: "05:00 PM"
    }]
  }];

  $scope.reservar = function(objPelicula) {
    //Pasar a la parte de seleccionar asientos
    $location.path('/seleccionar-asientos/' + objPelicula.fecha + '/' + objPelicula.nombre + '/' + objPelicula.tandaSeleccionada);

    console.log(objPelicula);
  }
});