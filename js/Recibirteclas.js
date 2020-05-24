const numberButtons = document.querySelectorAll('[datos-numeros]');
const ElementoTextoOperandoAnterior = document.querySelectorAll('[data-previous]'); 
class Teclado{
constructor(ElementoTextoOperandoAnterior){
    this.ElementoTextoOperandoAnterior = ElementoTextoOperandoAnterior;
};
appendNumber(number){
   var elemento = document.getElementById('password');
   var value = elemento.value;
   elemento.value = value + number;
};
};
const tecla = new Teclado(ElementoTextoOperandoAnterior);
numberButtons.forEach(button => {

button.addEventListener('click', () =>{
tecla.appendNumber(button.innerHTML);
});
});










