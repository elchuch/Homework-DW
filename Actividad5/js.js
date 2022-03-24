 
function setInterruptor(interruptor){
 var imagen;
  if(interruptor==0){
   imagen ="img/IZTA.jpg";
  }else{
      imagen ="img/TLALOC.jpg";
  }
  document.getElementById('imagenOne').src=imagen;

}