
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDc7df9plj3bHl4SjsJTNbce-O6p0wi7nU",
      authDomain: "himessage-4ebcd.firebaseapp.com",
      projectId: "himessage-4ebcd",
      storageBucket: "himessage-4ebcd.appspot.com",
      messagingSenderId: "210899269400",
      appId: "1:210899269400:web:fff1db2f63a1890a01906d",
      measurementId: "G-XYE9C4HTWG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
