let db = firebase.firestore().collection("mudanzas");
var cajas = document.getElementById('cajas');
var arregloCajas = [];
var arregloBotones = [];
let x;
var nombreMudanza = document.getElementById('nombreMudanza');

var title = localStorage.getItem('ref');

nombreMudanza.innerHTML = `Cajas en mudanza: ${title}`;

var itemFinal;

var infoCajas = db.doc(title);

infoCajas.get().then((doc) => {
     var cont = 1;
    if (doc.exists) {
        //console.log("Document data:", doc.data().cajas);
          itemFinal = doc.data();
          datos = doc.data().cajas;

          Object.entries(datos).map(item => {
               //console.log(item);
               //console.log(item[1].nombre);
               //console.log(item[1].items);

               cajas.innerHTML += `
                    <div class="todaCaja">
                         <div class="caja mb-2" id="${item[0]}">
                              <div class="nombre-caja">
                                   <span>${cont}</span> <p>${item[1].nombre}</p>
                              </div>
                         </div>
                         <div class="icon">
                              <img src="./../img/eliminar.svg" alt="" id="${item[0]}-del">
                         </div>
                    </div>
               `;

               cont+=1;

               arregloCajas.push(document.getElementById(item[0]));
               arregloBotones.push(document.getElementById(`${item[0]}-del`));

             });

             arregloCajas.forEach((item) =>{

               document.getElementById(item.id).addEventListener("click", (e)=>{
                    console.log(`me diste click en: ${e.target.id}`);
          
                    localStorage.setItem('caja', e.target.id);
          
                    //window.location.href = "./../pages/vistaItems.html"
               });
          });

          arregloBotones.forEach((item) =>{

               document.getElementById(item.id).addEventListener("click", (e)=>{
                    //console.log(`intentas borrar a: ${e.target.id}`);
                    porBorrar = e.target.id;
                    porBorrar = porBorrar.slice(0, -4);
                    item = itemFinal;
                    var cajasNuevo = datos;
                    delete cajasNuevo[porBorrar];
                    item["cajas"] = cajasNuevo;
                    console.log(item);
                     
                    infoCajas.set(item).then(() =>{
                         console.log("actualizado");
                         window.location.href = "./../pages/vistaCajas.html"
                    });
                    
               });
          });


    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});



