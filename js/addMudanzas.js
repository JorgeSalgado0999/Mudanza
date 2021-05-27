let db = firebase.firestore().collection("mudanzas");
var mudanzas = document.getElementById('mudanzas');
var arregloMudanas = [];
var arregloBotones = [];

db.onSnapshot(function(snapshot){
     var cont = 0;

     snapshot.forEach(function(item){
          /*console.log(item.data().nombre);
          console.log(item.data().cantCajas);
          console.log(item.id);*/

          mudanzas.innerHTML += `
          
          

          <div class="todaCaja">
               <div class="mudanza mb-2" id="${item.id}">
                    <div class="nombre-mudanza">
                         <p>${item.data().nombre}</p>
                    </div>
                    <div class="status" >
                         <p class="text-success">${item.data().estado}</p>
                    </div>
               </div>
               <div class="icon">
                    <img src="./../img/eliminar.svg" alt="" id="${item.id}-del">
               </div>
          </div>
          
          `;

          //console.log(item.id);

          arregloMudanas.push(document.getElementById(item.id));
          arregloBotones.push(document.getElementById(`${item.id}-del`));

             
          
     });

     //console.log(arregloMudanas);

     arregloMudanas.forEach((item) =>{

          document.getElementById(item.id).addEventListener("click", (e)=>{
               console.log(`me diste click en: ${e.target.id}`);

               localStorage.setItem('ref', e.target.id);

               window.location.href = "./../pages/vistaCajas.html"
          });
     });


     arregloBotones.forEach((item) =>{

          document.getElementById(item.id).addEventListener("click", (e)=>{

               console.log(`intentas borrar a: ${e.target.id}`);
               porBorrar = e.target.id;
               porBorrar = porBorrar.slice(0, -4);
               
               db.doc(porBorrar).delete().then(()=>{
                    console.log("eliminado");
                    window.location.href = "./../pages/vistaMudanzas.html";
               }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
               
          });
     });


});
