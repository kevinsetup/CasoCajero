//logueo Inicio
logueado = new Boolean(false);

var contraseñaVerif = "12345678";
var saldo = localStorage.getItem("datasaved");
  class Usuario{
    constructor(contraseña, saldo){ 

    this.contraseña = contraseña;
    this.saldo = saldo;
    }
   
    contraseña(){
    return this.contraseña;
   };
   saldo(){

  return this.saldo;
};
};

var user = new Usuario(document.getElementById("password").value,saldo);
function Ok(){
   user.contraseña = document.getElementById("password").value;
  if(user.contraseña == contraseñaVerif){
      
     function go(){
       window.location = "Menu.html";
     }

      logueado = true;
      if(logueado){
        document.getElementById("logueo").style.display = "block";
        document.getElementById("logueo").innerHTML = "Redigiendo a la página principal ...";
        setInterval(go,2000);

      }else{
          alert("ERROR! NO ADMITIDO");
      }
     

      
  }else{
    document.getElementById("logueo").style.display = 'block';

      function restart(){
        document.getElementById("logueo").style.display = 'none';
      }
      setInterval(restart,2500);
      
      var elemento = document.getElementById("password");
       elemento.value = "";

  }


}
function returnmenu(){
  window.location = "Menu.html";
}
//Logueo final




/////////////////SALDO////////////////////////////////////////

function trans_hecha(){
  user.contraseña = document.getElementById("password").value;
  var elemento = user.contraseña;
  if(elemento === ""){
    document.getElementById("trans").style.display = 'block'; 
    document.getElementById("trans").innerHTML = "Transacción inválida";
    function restart(){
      document.getElementById("trans").style.display = 'none';
    }
    setTimeout(restart,2500);
   
    
  }else{   
    if(elemento%10 == 0){   
      var montodescuento = Number(user.contraseña);
      if(montodescuento > user.saldo){
        document.getElementById("trans").style.display = 'block';
        document.getElementById("trans").innerHTML = "Usted no cuenta con los fondos suficientes";
        function restart2(){
          document.getElementById("trans").style.display = 'none';
        }
        setTimeout(restart2,2500);
      
      

       }else{
        var guardardata = user.saldo - montodescuento;       
        localStorage.setItem("datasaved",guardardata);
        document.getElementById("trans").style.display = 'block';
        document.getElementById("trans").innerHTML = "Procesando transacción, espere un momento...";
      

         function ir(){
     
          window.location = "Trans_soles.html";

         }
         setTimeout(ir,3000);
    
       }

 
        
  
    }else{
      document.getElementById("trans").style.display = 'block';
      document.getElementById("trans").innerHTML = "Sólo múltiplos de 10";
      function restart3(){
        document.getElementById("trans").style.display = 'none';
      }
      setTimeout(restart3,2500);
    }


  }

}
function reiniciar(){
  alert("Reinciado");
saldo = 5000;
localStorage.setItem("datasaved",saldo);


}

function desaparecer(){
  document.getElementById("20").style.display = 'none';
    document.getElementById("150").style.display = 'none';
 
    document.getElementById("300").style.display = 'none';

    document.getElementById("100").style.display = 'none';
  
    document.getElementById("200").style.display = 'none';

    document.getElementById("cancelar").style.display = 'none';
    document.getElementById("other").style.display = 'none';
    

}
function texto_saldo(){
  document.getElementById("trans").style.display = 'block';
  document.getElementById("trans").innerHTML = "Usted no cuenta con los saldos suficientes";
}
function texto_saldo_Desaparecer(){
  document.getElementById("trans").style.display = 'none';

}

function reaparecer(){
  document.getElementById("20").style.display = 'block';
  document.getElementById("150").style.display = 'block';

  document.getElementById("300").style.display = 'block';

  document.getElementById("100").style.display = 'block';

  document.getElementById("200").style.display = 'block';

  document.getElementById("cancelar").style.display = 'block';
  document.getElementById("other").style.display =    'block';
 
}



function trans_20(){

  var montodescuento = 20;
  if(montodescuento > user.saldo){
  desaparecer();
  texto_saldo();
  setTimeout(reaparecer,1000);
  setTimeout(texto_saldo_Desaparecer,1000);
 


  }else{
  var guardardata = user.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";

  }
}
function trans_150(){
  var montodescuento = 150;
  if(montodescuento > user.saldo){
    desaparecer();
    texto_saldo();
  }else{


  var guardardata = user.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";
  }
}
function trans_300(){
  var montodescuento = 300;
  if(montodescuento > user.saldo){
    desaparecer();
    texto_saldo();
  }else{
  var guardardata = user.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";
  }
}
function trans_100(){
  var montodescuento = 100;
   if(montodescuento >user.saldo){
    desaparecer();
    texto_saldo();
   }else{


  var guardardata = user.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";
   }
}
function trans_200(){
  var montodescuento = 200;
  if(montodescuento > user.saldo){
    desaparecer();
    texto_saldo();
  }else{
  var guardardata = user.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html"
  }
}
function Consultas_saldo(){
  // var Saldo = new User(saldo);
   
   
   document.getElementById("saldo").style.display = 'block';
   document.getElementById("saldo").innerHTML = "Su saldo actual : " + saldo ;


 };





