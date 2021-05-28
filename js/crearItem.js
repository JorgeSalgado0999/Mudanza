let botonCrear = document.getElementById('create');
let db = firebase.firestore().collection("mudanzas");

var title = localStorage.getItem('ref');
var titleCaja = localStorage.getItem('caja');

let dbActual = db.doc(title);
let dbData;

var item = {};


dbActual.get().then((doc) => {

    if (doc.exists) {
     //console.log("Document data:", doc.data().cajas);
     dbData = doc.data();

     item = {
          nombre: doc.data().nombre,
          estado: doc.data().estado,
          cajas: doc.data().cajas,
          cantCajas: doc.data().cantCajas,
     }


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});



botonCrear.addEventListener("click", (e)=>{
     e.preventDefault();

     let agregar = document.getElementById('nom').value;

     var nuevoItem = {};
     nuevoItem["nombre"] = agregar;
     nuevoItem["fragil"] = "false";

     item.cajas[titleCaja].contenido[`item${item.cajas[titleCaja].items}`] = nuevoItem;
     item.cajas[titleCaja].items+=1;

     dbActual.set(item).then(() =>{
          console.log("actualizado");
          window.location.href = "./../pages/vistaItems.html";
     }); 
     
     //console.log(item);

    
     
});