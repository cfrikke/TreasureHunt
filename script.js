let fb = document.getElementById("fancybutton");
let buttonclicked = false;
let permissions = false;
let allowclick = false
     function fancyBtn() { 
    document.getElementById("fancybutton").classList.toggle("escapeMouse");
    console.log("done");
    allowclick = true;
    }
    function toggleClass() {
     if(allowclick === true){
    buttonclicked = true;
    console.log("CLICKED!")
    }}
    function askPerms() {
let notif = Notification.requestPermission();
     permissions = true;
console.log("Permissions accepted");
}


function stepTwo() {
     if(buttonclicked === true && permissions === true){
          alert("You made it to Night 2!");
          window.open("page2.html")
     }
}
