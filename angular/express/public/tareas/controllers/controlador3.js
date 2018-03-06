(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.tareas=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/tareas'
			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/tareas/0',
				data:{"nombre":"tarea 5","descripcion":"dsfsdfs","usuario_id":1}
			};
			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.tareas=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
		ctl.init();
	}
]);
    
})();