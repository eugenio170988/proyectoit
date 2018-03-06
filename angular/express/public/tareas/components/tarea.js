(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngTarea",[
    function(){
        return{
            template:"{{tarea.nombre}}, {{tarea.descripcion}}<br/>"
        }
    }
    ]);
    
})();