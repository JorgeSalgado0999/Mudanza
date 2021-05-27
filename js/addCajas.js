let db = firebase.firestore().collection("mudanzas");
var cajas = document.getElementById('cajas');
var arregloCajas = [];

var nombreMudanza = document.getElementById('nombreMudanza');

var title = localStorage.getItem('ref');

nombreMudanza.innerHTML = `Cajas en mudanza: ${title}`;


var infoCajas = db.doc(title);

infoCajas.get().then((doc) => {
     var cont = 1;
    if (doc.exists) {
        //console.log("Document data:", doc.data().cajas);

        let x = doc.data().cajas;

          Object.entries(x).map(item => {
               console.log(item);
               console.log(item[1].nombre);
               console.log(item[1].items);

               cajas.innerHTML += `
               <div class="caja mb-2" id="${item.id}">
                    <div class="nombre-caja">
                         <span>${cont}</span> <p>${item[1].nombre}</p>
                    </div>
               </div>
               `;

               cont+=1;

             });


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
