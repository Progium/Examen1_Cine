'use strict';

var Examen1_Cine = {};

var App = angular.module('Examen1_Cine', ['Examen1_Cine.services', 'ngRoute']);

App.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
})

App.config(function($routeProvider, $locationProvider) {
  	$routeProvider
		.when('/iniciar-sesion', {
			templateUrl: 'modulos/iniciar-sesion/iniciar-sesion.html',
			controller: 'IniciarSesionController'
		})
		.when('/seleccionar-peliculas', {
			templateUrl: 'modulos/peliculas/peliculas.html',
			controller: 'PeliculasController'
		})
		.when('/seleccionar-asientos/:fecha/:nombre/:tanda', {
			templateUrl: 'modulos/asientos/asientos.html',
			controller: 'AsientosController'
		})
		.when('/factura/:jsonDatosPelicula', {
			templateUrl: 'modulos/factura/factura.html',
			controller: 'FacturaController'
		})
		.otherwise({
        	redirectTo: '/iniciar-sesion'
		});

	//$locationProvider.html5Mode(true);
	//$httpProvider.responseInterceptors.push('responseHttpInterceptor');
});

// .config(function($routeProvider, $locationProvider) {
//   $routeProvider
//    .when('/Book/:bookId', {
//     templateUrl: 'book.html',
//     controller: 'BookController'
//   })
//   .when('/Book/:bookId/ch/:chapterId', {
//     templateUrl: 'chapter.html',
//     controller: 'ChapterController'
//   });
// });