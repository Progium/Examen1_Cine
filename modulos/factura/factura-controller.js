'use strict';


App.controller('FacturaController', function($scope, $routeParams) {
    
    var objPedido = JSON.parse($routeParams.jsonDatosPelicula);

    var entradas = objPedido.cantidad;
    objPedido.total =  0;
    objPedido.numTarjeta = "XXXX-XXXX-XXXX-3214";
    $scope.pedido = objPedido;

    for (var i = 0; i < objPedido.asientos.length ; i++) {
        objPedido.total += objPedido.asientos[i].precio;
    };

    $scope.aceptar = function(){
        alert('Compra realizada exitosamente');
    };

});