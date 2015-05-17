'use strict';

/**
 * PeliculasController
 * @constructor
 */
var PeliculasController = function($scope, $rootScope, $http, $window) {


  $scope.esVisible = false;

  $scope.init = function() {};

  $scope.init();

  $rootScope.$on('mostrarPeliculas', function(event) {
    $scope.listaPeliculas = [{
      nombre: "Avengers:La Era de Ultron",
      tanda: "22 de mayo a las 3p.m",
      precio: "2900"
    }, {
      nombre: "Heroe del Centro Comercial 2",
      tanda: "23 de mayo a las 6p.m",
      precio: "2900"
    }, {
      nombre: "Mad Max:Furia En El Camino",
      tanda: "21 de mayo a las 5p.m",
      precio: "2900"
    }, {
      nombre: "Avengers:La Era de Ultron",
      tanda: "24 de mayo a las 11a.m",
      precio: "2900"
    }, {
      nombre: "Maten al Mensajero",
      tanda: "22 de mayo a las 7p.m",
      precio: "2900"
    }, {
      nombre: "Zapatero a tus Zapatos",
      tanda: "21 de mayo a las 4p.m",
      precio: "2900"
    }, {
      nombre: "Rapidos y Furiosos 7",
      tanda: "24 de mayo a las 10a.m",
      precio: "2900"
    }];

    $scope.esVisible = true;
  });

  $scope.reservar = function(objPelicula){
    $rootScope.$broadcast('seleccionarAsientos', objPelicula);

    $scope.esVisible = false;
  }
};