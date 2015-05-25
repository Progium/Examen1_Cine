'use strict';

/**
 * PeliculasController
 * @constructor
 */

App.controller('PeliculasController', function($scope, $location, ServicioPeliculas) {
  
  $scope.listaPeliculas = ServicioPeliculas.datosPelicula();
   
  $scope.reservar = function(objPelicula) {
    //Pasar a la parte de seleccionar asientos
    $location.path('/seleccionar-asientos/' + objPelicula.fecha + '/' + objPelicula.nombre + '/' + objPelicula.tandaSeleccionada);

    console.log(objPelicula);
  }
});