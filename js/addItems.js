let db = firebase.firestore().collection("mudanzas");
var items = document.getElementById('items');
var arregloFragil = [];
var arregloEliminar = [];
let x;
var nombreCaja = document.getElementById('nombreCaja');

var title = localStorage.getItem('ref');
var titleCaja = localStorage.getItem('caja');

nombreCaja.innerHTML = `Items en ${titleCaja}`;

var itemFinal;

var infoItems = db.doc(title);

infoItems.get().then((doc) => {
     var cont = 1;
    if (doc.exists) {
        //console.log("Document data:", doc.data().cajas);
          itemFinal = doc.data();
          datos = itemFinal.cajas[titleCaja].contenido;

          Object.entries(datos).map(item => {
               console.log(item);
               items.innerHTML += `
                    <div class="elemento-caja">
                         <div class="list-group-item list-group-item-action elemento-caja"> 
                              <p>${item[].nombre}</p>
                              <div>
                                   <button type="button" class="btn btn-warning" id="${item.id}-fra">Frágil</button>
                                   <button type="button" class="btn btn-danger" id="${item.id}-del">Eliminar</button>
                              </div>
                         </div>
                    </div>
               `;
               cont+=1;

               arregloFragil.push(document.getElementById(`${item[0]}-fra`));
               arregloEliminar.push(document.getElementById(`${item[0]}-del`));

             });


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

