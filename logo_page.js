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
  room_name=localStorage.getItem("Room Name");

  function send(){
    msg=  document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0

    });
    document.getElementById("msg").value="";  
      
  }
  function logout(){
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room Name");
      window.location="index.html";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4 class='message_h4'>"+name+"<img class='user_tick'src='https://www.citypng.com/public/uploads/preview/-11590487324f5c6zxnady.png'></h4>";
msg_with_tag="<h4 class'message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id +"value="+like+"onclick='updaeLikes(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span> </button> <hr>";
row=name_with_tag+msg_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;


 } });  }); }
getData();
  