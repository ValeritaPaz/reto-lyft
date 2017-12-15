//INICIALIZA DOM Y HACE FUNCION SPLASH
$(document).ready(function(){
  $("#home-page, .next-view, .validate-phone, .form-signup, .check").hide();
   setTimeout(function() {
      $(".logo").fadeOut(100);
      $("#home-page").show();
   }, 2000);

   //funcion mostrar vista sign up
   $(".btn-signup").click(function(){
    $("#home-page").hide();
    $(".next-view").show();
   });

   //funcion back sign up
   $(".prev-btn").click(function(){
    $(".next-view").hide();
    $("#home-page").show();    
   });

   //funcion mostrar vista de validacion
   $(".btn-next").click(function(){
    $(".validate-phone").show();
    $(".next-view").hide();
   });
   //funcion back to sign up
   $(".prev-btn2").click(function(){
    $(".next-view").show();
    $(".validate-phone").hide(); 
   });

   //funcion mostrar vista de formulario
   $(".btn-next2").click(function(){
    $(".form-signup").show();
    $(".validate-phone").hide();   
   });
   //funcion back to sign up
   $(".prev-btn3").click(function(){
    $(".validate-phone").show();
    $(".form-signup").hide();  
   });

   $(".btn-next3").click(function(){
    $(".check").show();
    $(".form-signup").hide();
   });

   $(".input-phone, .number-validation").keyup(function (){
    this.value = (this.value + "").replace(/[^0-9]/g, "");
  });

   $(".input-phone").click(function () {
    var phoneNumber = $(".input-phone").val();
    $(".input-phone").val("");
    var phoneLength = phoneNumber.length;
    if (phoneLength === 10) {
      $(".btn-next").attr("disabled", false);
      alert("Tu código: LAB-551");
      return false;
      } else {
        $(".btn-next").attr("disabled", true);
      };
    });

});