let botonCambiar = document.getElementById('update');
let db = firebase.firestore().collection("mudanzas");

var title = localStorage.getItem('ref');

let dbActual = db.doc(title);
let dbData;

var item = {};

let inputEstado = document.getElementById('status');


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

     //inputEstado.value = doc.data().estado;


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});



botonCambiar.addEventListener("click", (e)=>{
     e.preventDefault();

     
     inputEstado = document.getElementById('status').value;
     //console.log(inputEstado)
     

     var itemCreado = dbData;

     itemCreado["estado"] = inputEstado;
     

     dbActual.set(itemCreado).then(() =>{
          console.log("actualizado");
          window.location.href = "./../pages/vistaCajas.html";
     });
     
     //console.log(item);

    
     
});