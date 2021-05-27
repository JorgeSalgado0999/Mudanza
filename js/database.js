
let db = firebase.firestore().collection("mudanzas");

db.onSnapshot(function(snapshot){


     snapshot.forEach(function(item){
          console.log(item.data().nombre);
          console.log(item.data().cantCajas);
          console.log(item.id);

          let x = item.data().cajas;

          Object.entries(x).map(i => {
               console.log(i);
               console.log(i[1].nombre);
               console.log(i[1].items);
          });
             
          
     });
});


var item={
     nombre: "Salgado2",
     cantCajas: 32,
     cajas: {
          caja1: {
               nombre: "comedor",
               items: 15,
          },
          caja2:{
               nombre: "baño",
               items: 5,
          }
     }, 
     comentarios:{
          coment1: "hola"
     },
}

function agregar(){
     let db3 = firebase.firestore().collection("mudanzas");
     
     db3.add(item).then(() =>{
          console.log("agregado");
     });

}

var item2={
     nombre: "Treviño",
     cantCajas: 32,
     cajas: {
          caja1: {
               nombre: "comedor",
               items: 15,
          },
          caja2:{
               nombre: "baño",
               items: 5,
          }
     }, 
     comentarios:{
          coment1: "hola"
     },
}

function actualizar(){
     let db3 = firebase.firestore().collection("mudanzas").doc("Salgado2");
     
     db3.set(item2).then(() =>{
          console.log("actualizado");
     });

}


