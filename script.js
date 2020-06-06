
var botonFetch = document.getElementById('botonFetch');
var contenido = document.querySelector('#contenido');
 //leer archivos con fetch
function traer(){
	fetch ('https://randomuser.me/api/') //url de la api a utuilizar
	.then(res => res.json()) //tramos la respuesta 
	.then(data =>{
		console.log(data.results[0]);
		 contenido.innerHTML = `
		<img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle" />
		<p>Nombre: ${data.results[0].name.first}</p>
		`
	})
}

botonFetch.onclick = traer;

