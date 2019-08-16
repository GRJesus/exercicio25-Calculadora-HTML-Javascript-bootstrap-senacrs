function send (event) {
  event.preventDefault();
  var result = document.getElementById("result");
 function validation (name,email,age,telephone,Address){
   if (name.split(" ").lenght >=2) {
     result.innerHTML = name
   }
 }
 var result = validation (name,email,age,telephone,address);
}
