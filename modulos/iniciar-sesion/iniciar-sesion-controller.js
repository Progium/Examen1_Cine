'use strict';

/**
 * IniciarSesionController
 * @constructor
 */

App.controller('IniciarSesionController', function($scope, $location) {
  $scope.mostrarMensaje = false;
  $scope.usuario = {};

  $scope.init = function() {
    $scope.usuario.nombre = "Admin",
      $scope.usuario.contrasenna = "1234"
  };

  $scope.init();

  $scope.iniciarSesion = function() {
    if ($scope.nombre === $scope.usuario.nombre && $scope.contrasenna == $scope.usuario.contrasenna) {
      //Seleccionar la pelicula
      $location.path('/seleccionar-peliculas');

    } else {
      $scope.mostrarMensaje = true;
    }
  };
});