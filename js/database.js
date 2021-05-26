// Your web app's Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyCTVRVk8QrRy_LdPAqo8biE0ImFVry-HVI",
     authDomain: "mudanza-552e2.firebaseapp.com",
     projectId: "mudanza-552e2",
     storageBucket: "mudanza-552e2.appspot.com",
     messagingSenderId: "674167731342",
     appId: "1:674167731342:web:5c22b580a31af391b685df"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


let db = firebase.firestore().collection("mudanzas").onSnapshot(function(snapshot){


     snapshot.forEach(function(item){
          console.log(item.data().nombre);
          console.log(item.data().cantCajas);
          console.log(item.id);

          let x = item.data().cajas;

          Object.entries(x).map(i => {
               console.log(i);
               console.log(i[1].nombre);
               console.log(i[1].items);
             })
             
          
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


