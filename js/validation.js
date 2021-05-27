
var uid = null;
var userName = null;
var userInput = document.getElementById('user');

firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
     // User is signed in.
     uid = user.uid;
     //console.log(uid);
     userName = user.displayName;
     //console.log(userName);

     userInput.innerHTML = `${userName}`;
     }else{
          uid = null;
          window.location.replace("./../index.html");
     }
});

function logOut(){
     firebase.auth().signOut();
}
