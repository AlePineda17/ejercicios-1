$(document).ready(() => {
  $('#pantalla2').hide();
  $('#pantalla3').hide();
  $('#ocultarpantalla1').on('click', ()=>{
      $('#pantalla1').hide();
      $('#ocultar1').hide();
      $('#ocultar2').hide();
      $('#pantalla2').fadeToggle(1000);
  });
      
  $('#ocultarpantalla2').on('click', ()=>{
      $('#pantalla2').hide(); 
      $('#pantalla3').fadeToggle(1000);
  });
  });