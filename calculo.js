function insert(num) {
  var numero = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = numero+num;

}
function limpar(){
  document.getElementById("tela").innerHTML = "";
}
function apagar(){
  var result = document.getElementById("tela").innerHTML;
  document.getElementById("tela").innerHTML = result.substring(0, result.length -1);
}
function igual(){
  var igual = document.getElementById("tela").innerHTML;
  if (igual) {
    document.getElementById("tela").innerHTML = eval(igual)
  }else{
    alert("Coloque um numero!")
  }
}

