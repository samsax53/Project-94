const firebaseConfig = {
      apiKey: "AIzaSyDs7Z2xYnuBN_kVtjXuoUb93FUpaqecjZE",
      authDomain: "class94-49c66.firebaseapp.com",
      databaseURL: "https://class94-49c66-default-rtdb.firebaseio.com",
      projectId: "class94-49c66",
      storageBucket: "class94-49c66.appspot.com",
      messagingSenderId: "1015936550485",
      appId: "1:1015936550485:web:9b96238e34d5b58ad1f6dc"
};
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("lcUserName");
document.getElementById("userDis").innerHTML = "Welcome,&nbsp; <code style='background-color: rgba(0, 0, 0, 0.6); color: white; font-family: Montserrat;'>" + username + "</code>";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logOut() {
      localStorage.removeItem("kwitterUsername");
      localStorage.removeItem("newRoom");
      window.location = "letschat.html"
}
