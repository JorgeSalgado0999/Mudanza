let botonCrear = document.getElementById('create');
let db = firebase.firestore().collection("mudanzas");

var title = localStorage.getItem('ref');

let dbActual = db.doc(title);
let dbData;

var item = {};

var cont=1;
var sum;
dbActual.get().then((doc) => {
     var cont = 1;
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
     //console.log(agregar);

     //console.log(dbData);
     let cajaNom = `caja${item.cantCajas+1}`;
     console.log(cajaNom);
     nuevaCaja = {};
     nuevaCaja["nombre"] = agregar;
     nuevaCaja["items"] = 0;

     item.cajas[cajaNom] = nuevaCaja;
     item.cantCajas += 1;

     dbActual.set(item).then(() =>{
          console.log("actualizado");
          window.location.href = "./../pages/vistaCajas.html";
     }); 
     
     //console.log(item);

    
     
});
