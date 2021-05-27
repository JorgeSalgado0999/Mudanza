let db = firebase.firestore().collection("mudanzas");
var mudanzas = document.getElementById('mudanzas');
var arregloMudanas = [];

db.onSnapshot(function(snapshot){
     var cont = 0;

     snapshot.forEach(function(item){
          /*console.log(item.data().nombre);
          console.log(item.data().cantCajas);
          console.log(item.id);*/

          mudanzas.innerHTML += `
          
          <div class="mudanza mb-2" id="${item.id}">
               <div class="nombre-mudanza">
                    <p>${item.data().nombre}</p>
               </div>
               <div class="status" >
                    <p class="text-success">${item.data().estado}</p>
               </div>
          </div>
          
          `;

          console.log(item.id);

          arregloMudanas.push(document.getElementById(item.id));

             
          
     });

     //console.log(arregloMudanas);

     arregloMudanas.forEach((item) =>{

          document.getElementById(item.id).addEventListener("click", (e)=>{
               console.log(`me diste click en: ${e.target.id}`);

               localStorage.setItem('ref', e.target.id);

               window.location.href = "./../pages/vistaCajas.html"
          });
     });


});
