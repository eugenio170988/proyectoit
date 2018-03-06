var express = require('express');  //Definicion de variables para cargarlas a express -- 
var path= require("path");
var mongoose = require('mongoose'); //Este es importante pa cargar base de datos mongodb
var bodyparser = require('body-parser'); //Cargamos bodyParser
var customRandom=require("./random-integer"); //Peticion del random-integer.js
var Tarea=require("./models/tarea"); //Cargamos nuestro modelos que definimos


var app = express();  
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017/tareas");

var publicFolder=path.resolve(__dirname, "public");
app.use(express.static(publicFolder));


var publicFolder=path.resolve(__dirname, "public/app");
app.use(express.static(publicFolder));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");

/*

app.use(function(req, resp, next){  //usuario logeado
	console.log("Recibiendo la petición");
	if(req.headers["Autorization"] =="")
		resp.writeHead(303,{"url:/login"});
	else
		next();
});
app.use(function(req, resp, next){  //usuario logeado
	console.log("Recibiendo la petición a :"+req.url);
	var permiso=bd.find({userid:id, appid:req.url})
		resp.writeHead(303,{"url:/login"});
			if(permiso.success)
				next();
	else
		resp.writeHead(401, {url:"/forviden"});
});
*/


app.get('/', function (req, resp) {
  resp.send('Hola mundo:' + customRandom());
});






app.get('/hola/:quien', function (req, resp) {
	resp.render("hola",{message:req.params.quien});
});



app.listen(8000, function () {
  console.log('El servidor esta corriendo en el puerto 8000!');
});


app.get('/Api/tareas/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Tarea(req.body);
		Tarea.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});


app.post('/Api/tareas/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log();
		var t=new Tarea(req.body);
		t.save();
		resp.send({save:"Ok"});
});

