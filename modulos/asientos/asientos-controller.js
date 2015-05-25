'use strict';

/**
 * AsientosController
 * @constructor
 */


App.controller('AsientosController', function($scope, $location, $routeParams) {
  $scope.datosPelicula = {
    fecha: $routeParams.fecha,
    nombre: $routeParams.nombre,
    tandaSeleccionada: $routeParams.tanda
  };

  $scope.filas = [];
  $scope.precioNormal = 2900;
  $scope.precioPreferencial = 2500;

  var filas = 4;
  var asientosXFilas = 4;
  var alphabet = "ABCDEFGHIJKLMNOPKRSTUVWXYZ".split("");

  for (var i = 0; i < filas; i++) {
    //Agregar fila
    var objNuevaFila = {
      codigoFila: alphabet[i],
      asientos: []
    };
    $scope.filas.push(objNuevaFila);

    for (var j = 0; j < asientosXFilas; j++) {
      var objNuevaAsiento;

      //Agregar la asiento a la fila
      objNuevaAsiento = {
        codigoAsiento: objNuevaFila.codigoFila + (j + 1),
        estaSeleccionada: false,
        tipo: (objNuevaFila.codigoFila == "D" ? "Preferencial" : "Normal"),
        precio: (objNuevaFila.codigoFila == "D" ? $scope.precioPreferencial : $scope.precioNormal)
      };

      objNuevaFila.asientos.push(objNuevaAsiento);
    };
  };

  $scope.seleccionarAsiento = function(objAsiento) {
    objAsiento.estaSeleccionada = !objAsiento.estaSeleccionada;
    $scope.mostrarAsientosSeleccionadas();
  };

  $scope.mostrarAsientosSeleccionadas = function() {
    $scope.mensaje = "Asientos seleccionados: ";
    $scope.cantidadAsientos = 0;
    $scope.asientosSeleccionados = [];

    for (var i = 0; i < filas; i++) {
      var objFila = $scope.filas[i];

      for (var j = 0; j < asientosXFilas; j++) {
        var objAsiento = objFila.asientos[j];

        if (objAsiento.estaSeleccionada) {
          $scope.mensaje += objAsiento.codigoAsiento + " ";
          $scope.cantidadAsientos ++;
          $scope.asientosSeleccionados.push(objAsiento); 
        };
      };
    };
  }

  $scope.mostrarDetallesCompra = function() {
    //Mostrar datos de la factura
    $location.path('/factura/' + JSON.stringify({
      pelicula: $scope.datosPelicula.nombre,
      fecha: $scope.datosPelicula.fecha,
      tanda: $scope.datosPelicula.tandaSeleccionada,
      cantidad: $scope.cantidadAsientos,
      asientos: $scope.asientosSeleccionados
    }));

    // $scope.esVisible = false;
  };
});