var mongoose = require('mongoose'); //cargamos la biblioteca
var Schema = mongoose.Schema; 

var tarea=new Schema({  //Creamos nuestra esquema
	nombre:String,
	descripcion:String,
	status:Number,
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}
*/
var tareaModel=mongoose.model("tarea",tarea);  //Exportamos nuestra esquema

module.exports=tareaModel;