'use strict';

/**
 * LogginController
 * @constructor
 */
var LogginController = function($scope, $rootScope, $http, $window) {
  $scope.mostrarMensaje = false;
  $scope.esVisible = true;

  $scope.usuario = {
    nombre: "Admin",
    contrasenna: "1234"
  };

  $scope.init = function() {};

  $scope.init();

  $scope.iniciarSesion = function() {
    if ($scope.nombre == $scope.usuario.nombre && $scope.contrasenna == $scope.usuario.contrasenna) {
      $rootScope.$broadcast('mostrarPeliculas', {});
      $scope.esVisible = false;
    } else {
      $scope.mostrarMensaje = true;
    }

  };

};