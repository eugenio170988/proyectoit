(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="tareaController";
app.controller(nombreControlador,
	['$routeParams','$location','tareaService',
	function(rp,l,service){
		var ctl=this;
		ctl.tarea={};
		
		ctl.guardar=function(frm){
		    ctl.tarea.usuario_id=1;
	        service.insertOrUpdate(ctl.tarea.id, ctl.tarea)
	        .then(function(data){
					ctl.tarea=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				}); 
		};
		
		ctl.init=function(){
		    var id=parseInt(rp.id);
		    if(rp && rp.id && id>0){
		        service.getById(rp.id).then(function(data){
						ctl.tarea=data.data;
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		ctl.init();
	}]);
})();