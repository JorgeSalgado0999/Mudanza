let botonCalificar = document.getElementById('create');
let db = firebase.firestore().collection("mudanzas");

var title = localStorage.getItem('ref');

let dbActual = db.doc(title);
let dbData;

var item = {};

let inputCalificacion = document.getElementById('calificacion');
let inputComentarios = document.getElementById('comentarios');


dbActual.get().then((doc) => {

    if (doc.exists) {
     //console.log("Document data:", doc.data().cajas);
     dbData = doc.data();

     item = {
          nombre: doc.data().nombre,
          estado: doc.data().estado,
          cajas: doc.data().cajas,
          cantCajas: doc.data().cantCajas,
          calificacion:doc.data().calificacion,
     }

     inputCalificacion.value = doc.data().calificacion["calificacion"];
     inputComentarios.value = doc.data().calificacion["opinion"];


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});



botonCalificar.addEventListener("click", (e)=>{
     e.preventDefault();

     inputCalificacion = document.getElementById('calificacion').value;
     inputComentarios = document.getElementById('comentarios').value;
     

     var itemCreado = dbData;

     var nuevoItem = {};
     nuevoItem["calificacion"] = inputCalificacion;
     nuevoItem["opinion"] = inputComentarios;

     itemCreado["calificacion"] = nuevoItem;
     

     dbActual.set(itemCreado).then(() =>{
          console.log("actualizado");
          window.location.href = "./../pages/vistaCajas.html";
     }); 
     
     //console.log(item);

    
     
});