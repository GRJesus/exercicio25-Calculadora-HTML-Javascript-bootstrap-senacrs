
function send (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = parseInt(document.getElementById("age").value);
  var telephone = parseInt(document.getElementById("telephone").value);
  var address = document.getElementById("address").value;
  var errors = [];

  if (name.split(" ").length < 2) {
    errors.push("Favor preencher o nome e sobrenome");
  }
  if (email=="") {
    errors.push("Favor informar o e-mail");
  }
  if (isNaN(age)) {
    errors.push("Campo idade obrigatório");
  } else {
    if (age < 18){
    errors.push("Permitido somente maiores de 18 anos");
    }
  }
  if (telephone=="" ) {
    errors.push("Campo telefone obrigatório");
  } else {
    if (isNaN(telephone)){
    errors.push("Favor informar somente numeros")
    }
  }
  if (address=="") {
    errors.push("Campo endereço obrigatório");
  }
  if (errors.length>0) {
    result.innerHTML = errors.join("</br>");
  }
  else {
    result.innerHTML = (name + ", parabéns! seus dados foram preenchidos com sucesso.");
    clear();
  }
}
function clear (){
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  parseInt(document.getElementById("age").value) = "";
  parseInt(document.getElementById("telephone").value) = "";
  document.getElementById("address").value = "";
}
