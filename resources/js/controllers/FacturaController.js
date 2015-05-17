'use strict';


var FacturaController = function($scope,$rootScope,$http) {

	$scope.esVisible = false;

	$rootScope.$on('mostrarDetalles', function(event, objPedido){
        var entradas = objPedido.cantidad;
        objPedido.total =  entradas * objPedido.precio;
        $scope.pedido = objPedido;

	    $scope.esVisible = true;
	});

    $scope.aceptar = function(){
        alert('Compra realizada exitosamente');
    };

};