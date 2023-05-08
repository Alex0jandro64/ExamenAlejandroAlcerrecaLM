class usuario{
	constructor(nombre,apellidos,recuperacion,respuesta,mail,passwd){
		
		this.nombre=nombre
		this.apellidos=apellidos
		this.recuperacion=recuperacion
		this.respuesta=respuesta
		this.mail=mail
		this.passwd=passwd
	}
	
} 

let usuarios=[]



function crearUsuario(form){
	
	let nombre = form.nombre.value
	let apellido = form.apellidos.value
	let recuperacion = form.pregunta.value
	let respuesta = form.respuesta.value
	let mail = form.mail.value
	let passwd = form.contraseya.value
	let repitapasswd = form.repitaContraseya.value
	
	if(passwd==repitapasswd){
		let usuario1 = new usuario(nombre,apellido,recuperacion,respuesta,mail,passwd)
		usuarios.push(usuario1)
		localStorage.setItem("usuarios1", JSON.stringify(usuarios));
		alert("Se a creado la cuenta correctamente")
	}
	else{
		alert("Las contraseñas no coinciden")
	}
	
	return usuarios
}

function iniciarSesion(form){
	let mail = form.mail.value
	let passwd = form.contraseya.value
	let iniciado=false;
	//Recupero los datos de la memoria
	var storedNames = JSON.parse(localStorage.getItem("usuarios1"));
	
	storedNames.forEach(function(storedName){
		if(storedName.mail==mail&&storedName.passwd==passwd){
			//solo funciona si la ruta web es exactamente esa
			window.location.href = 'http://localhost:8080/ExamenLMAlcerreca/Bienvenido.html';
			iniciado=true;
		}
	})
	if(!iniciado){
		alert("Los datos no son correctos")
	}
}

function recuperarContra(form){
	let mail = form.mail.value
	let encontrado = false;
	//Recupero los datos de la memoria
	var storedNames = JSON.parse(localStorage.getItem("usuarios1"));
	
	storedNames.forEach(function(storedName){
		if(storedName.mail==mail){
			var respu = prompt(storedName.recuperacion)
			if(respu==storedName.respuesta){
				//solo funciona si la ruta web es exactamente esa
				window.location.href = 'http://localhost:8080/ExamenLMAlcerreca/Bienvenido.html';
				encontrado=true;
			}
			
		}
	})
	if(!encontrado){
		alert("No se a encontrado la cuenta con ese correo")
	}
}
function volver(){
	window.location.href = 'http://localhost:8080/ExamenLMAlcerreca';
	//history.back() - me daba error
}