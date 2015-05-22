'use strict';


var FacturaController = function($scope,$rootScope,$http) {

	$scope.esVisible = false;

	$rootScope.$on('mostrarDetalles', function(event, objPedido){
        var entradas = objPedido.cantidad;
        objPedido.total =  0;
        objPedido.numTarjeta = "XXXX-XXXX-XXXX-3214";
        $scope.pedido = objPedido;

        for (var i = 0; i < objPedido.asientos.length ; i++) {
            objPedido.total += objPedido.asientos[i].precio;
        };

	    $scope.esVisible = true;
	});

    $scope.aceptar = function(){
        alert('Compra realizada exitosamente');
    };

};