let botonCrear = document.getElementById('create');
let db = firebase.firestore().collection("mudanzas");

botonCrear.addEventListener("click", (e)=>{
     e.preventDefault();

     let agregar = document.getElementById('nom').value;
     console.log(agregar);

     var item={
          nombre: agregar,
          estado: "iniciando",
     }

     db.doc(agregar).set(item).then(() =>{
          console.log("actualizado");
          window.location.href = "./../pages/vistaMudanzas.html";
     });
     
});

db.doc(nom)
     
     
    

