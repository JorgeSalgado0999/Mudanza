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
    if (doc.exists) {
        //console.log("Document data:", doc.data().cajas);
          itemFinal = doc.data();
          datos = itemFinal.cajas[titleCaja].contenido;

          Object.entries(datos).map(item => {
               //console.log(item);
               items.innerHTML += `
                    <div class="elemento-caja">
                         <div class="list-group-item list-group-item-action elemento-caja"> 
                              <p>${item[1].nombre}</p>
                              <div>
                                   <button type="button" class="btn btn-warning" id="${item[0]}-fra">${item[1].fragil}</button>
                                   <button type="button" class="btn btn-danger" id="${item[0]}-del">Eliminar</button>
                              </div>
                         </div>
                    </div>
               `;

               arregloFragil.push(document.getElementById(`${item[0]}-fra`));
               arregloEliminar.push(document.getElementById(`${item[0]}-del`));

             });
             

             arregloEliminar.forEach((item) =>{

               document.getElementById(item.id).addEventListener("click", (e)=>{
                    console.log(`intentas borrar a: ${e.target.id}`);
                    var porBorrar = e.target.id;
                    porBorrar = porBorrar.slice(0, -4);
                    var itemCreado = itemFinal;
                    var itemsNuevo = datos;
                    delete itemsNuevo[porBorrar];
                    itemCreado["cajas"]["contenido"] = itemsNuevo;
                    console.log(itemCreado);
                     
                    infoItems.set(itemCreado).then(() =>{
                         console.log("actualizado");
                         window.location.href = "./../pages/vistaItems.html"
                    });
                    
               });
          });

          arregloFragil.forEach((item) =>{

               document.getElementById(item.id).addEventListener("click", (e)=>{
                    console.log(`intentas fragilizar a: ${e.target.id}`);
                    var porFragilizar = e.target.id;
                    porFragilizar = porFragilizar.slice(0, -4);
                    //console.log(porFragilizar);
                    var itemCreado = itemFinal;
                    var itemsNuevo = datos;
                    
                    if(itemsNuevo[porFragilizar].fragil === "fragil"){
                         itemsNuevo[porFragilizar].fragil = "no fragil";
                    }else{
                         itemsNuevo[porFragilizar].fragil = "fragil";
                    }

                    itemCreado["cajas"][titleCaja]["contenido"] = itemsNuevo;
                    console.log(itemCreado);
                     
                    infoItems.set(itemCreado).then(() =>{
                         console.log("actualizado");
                         window.location.href = "./../pages/vistaItems.html"
                    })
                    
               });
          });


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

