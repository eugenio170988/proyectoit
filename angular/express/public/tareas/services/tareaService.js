(function () {
    'use strict';
    
/*global angular*/
var app =   angular.module('myApp') || {};

app.service("tareaService",['idioma','$http', 
function(urlApi,http){
    var service={};
    service.getById=function(id){
        var request1={
                    method:'GET',
                    url:urlApi+'/Api/tareas/'+id,
                };
        return http(request1);
    };
    
    
    service.insertOrUpdate=function(id, obj){
        var url=urlApi+'/Api/tareas/';
            if(id>0)
                url=url+id;
            else
            url=url+'0';
            var request1={
                    method:'POST',
                    url:url,
                    data:obj
                };
            return http(request1);
            
    };
    
    return service;
}]);
    
})();