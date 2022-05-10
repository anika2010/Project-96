const firebaseConfig = {
    apiKey: "AIzaSyAiu_EICzvk1YTZ6PcIjmhhdEzqiu7ZtDI",
    authDomain: "project-93-8b280.firebaseapp.com",
    databaseURL: "https://project-93-8b280-default-rtdb.firebaseio.com",
    projectId: "project-93-8b280",
    storageBucket: "project-93-8b280.appspot.com",
    messagingSenderId: "522574312984",
    appId: "1:522574312984:web:919940ce56ba2fc02bb56d",
    measurementId: "G-R4VHSQNCVR"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("User Name");
  document.getElementById("Name").innerHTML="Welcome " + user_name;
  function add_room(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("Room Name", room_name);
    window.location="logo_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    row="<div class='room_name' id="+ Room_names+"onlick='redirection(this.id)'>"+  Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row;
   
    });});}
getData();
function redirection(name){
    localStorage.setItem("Room Name", name);   
    window.location="logo_page.html";
}
function logout(){
    localStorage.removeItem("User Name");
    localStorage.removeItem("Room Name");
    window.location="index.html";
}