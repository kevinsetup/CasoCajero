var saldo = localStorage.getItem("datasaved");
class User{
  constructor(saldo){ 

  this.saldo = saldo;
  }
 
  saldo(){
  return this.saldo;
};
};
var Saldo = new User(saldo);
function Consultas_saldo(){
  
 // var Saldo = new User(saldo);
  //alert(Saldo.saldo);
   alert(localStorage.getItem("datasaved"));
   
};




function trans_hecha(){
    var elemento = document.getElementById("password").value;
    if(elemento == ""){
        alert("Transacción inválida");
    }else{   
      if(elemento%10 == 0){   
        var montodescuento = Number(document.getElementById("password").value);
        if(montodescuento > Saldo.saldo){
          alert("Transacción fallida, usted no cuenta con los fondos suficientes");

         }else{
          var guardardata = Saldo.saldo - montodescuento;
          window.location = "Trans_soles.html";
          localStorage.setItem("datasaved",guardardata);
          alert(localStorage.getItem("datasaved"));
         }

   
          
    
      }else{
          alert("Solo múltiplos de 10");
      }


    }

    
    
}

function reiniciar(){
  alert("Reinciado");
saldo = 5000;
localStorage.setItem("datasaved",saldo);


}
function trans_20(){
  var montodescuento = 20;
  if(montodescuento > Saldo.saldo){
    alert("Transacción fallida, usted no cuenta con los fondos suficientes");

  }else{
  var guardardata = Saldo.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";

  }
}
function trans_150(){
  var montodescuento = 150;
  if(montodescuento > Saldo.saldo){
    alert("Transacción fallida, usted no cuenta con los fondos suficientes");
    
  }else{


  var guardardata = Saldo.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";
  }
}
function trans_300(){
  var montodescuento = 300;
  if(montodescuento > Saldo.saldo){
    alert("Transacción fallida, usted no cuenta con los fondos suficientes");
  }else{
  var guardardata = Saldo.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";
  }
}
function trans_100(){
  var montodescuento = 100;
   if(montodescuento >Saldo.saldo){
    alert("Transacción fallida, usted no cuenta con los fondos suficientes");
   }else{


  var guardardata = Saldo.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html";
   }
}
function trans_200(){
  var montodescuento = 200;
  if(montodescuento > Saldo.saldo){
    alert("Transacción fallida, usted no cuenta con los fondos suficientes");
  }else{
  var guardardata = Saldo.saldo - montodescuento;
  localStorage.setItem("datasaved",guardardata);
  alert(localStorage.getItem("datasaved"))
  window.location = "Trans_soles.html"
  }
}


