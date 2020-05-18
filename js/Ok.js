logueado = new Boolean(false);

var contraseñaVerif = "12345678";
class Usuario{
    constructor(contraseña){ 

    this.contraseña = contraseña;
    }
   
    contraseña(){
    return this.contraseña;
};
};
function Ok(){
    var user = new Usuario(document.getElementById("password").value);

  if(user.contraseña == contraseñaVerif){
      
      alert("logueo correcto");
      logueado = true;
      if(logueado){
        window.location = "Menu.html";

      }else{
          alert("ERROR! NO ADMITIDO");
      }
     

      
  }else{
      alert("Logueo incorrecto");
      var elemento = document.getElementById("password");
       elemento.value = "";

  }


}
function returnmenu(){
  window.location = "Menu.html";
}




