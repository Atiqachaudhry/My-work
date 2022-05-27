//This is to show magnifying glass
$(document).ready(function(){

//setting  the hover to be hidden by default

$(".hover").hide();

$(".img-one").mouseover(function(){
    $("#imgOne").show();
});
$(".img-one").mouseout(function(){
    $("#imgOne").hide();
});
$(".img-two").mouseover(function(){
    $("#imgTwo").show();
});
$(".img-two").mouseout(function(){
    $("#imgTwo").hide();
});
$(".img-three").mouseover(function(){
    $("#imgThree").show();
});
$(".img-three").mouseout(function(){
    $("#imgThree").hide();
});
$(".img-four").mouseover(function(){
    $("#imgFour").show();
});
$(".img-four").mouseout(function(){
    $("#imgFour").hide();
});
$(".img-five").mouseover(function(){
    $("#imgFive").show();
});
$(".img-five").mouseout(function(){
    $("#imgFive").hide();
});
$(".img-six").mouseover(function(){
    $("#imgSix").show();
});
$(".img-six").mouseout(function(){
    $("#imgSix").hide();
});
$(".img-seven").mouseover(function(){
    $("#imgSeven").show();
});    
$(".img-seven").mouseout(function(){
$("#imgSeven").hide();
});

$(".img-eight").mouseover(function(){
$("#imgEight").show(); 
});

$(".img-eight").mouseout(function(){
 $("#imgEight").hide();
});

// display the modal 
$("#modalOne, #modalTwo, #modalThree, #modalFour, #modalFive, #modalSix, #modalSeven, #modalEight, .modal").hide();

$("#imgOne").click(function(){

  $("#modalOne, .modal").show();
$("#modalTwo, #modalThree,#modalFour, #modalFive, #modalSix, #modalSeven, #modalEight,modal").hide();
});

$("#imgTwo").click(function(){

 $("#modalTwo, .modal").show();
 $("#modalOne, #modalThree,#modalFour, #modalFive, #modalSix, #modalSeven, #modalEight,modal").hide();
    });

    $("#imgThree").click(function(){

     $("#modalThree, .modal").show();
     $("#modalOne, #modalTwo,#modalFour, #modalFive, #modalSix, #modalSeven, #modalEight,modal").hide();
        });

   $("#imgFour").click(function(){

   $("#modalFour, .modal").show();
   $("#modalOne, #modalTwo,#modalThree, #modalFive, #modalSix, #modalSeven, #modalEight,modal").hide();
   });

   $("#imgFive").click(function(){
     $("#modalFive, .modal").show();
     $("#modalOne, #modalTwo,#modalThree, #modalFour, #modalSix, #modalSeven, #modalEight,modal").hide();
});

    $("#imgSix").click(function(){
       $("#modalSix, .modal").show();
       $("#modalOne, #modalTwo,#modalThree, #modalFour, #modalFive, #modalSeven, #modalEight,modal").hide();
     });

      $("#imgSeven").click(function(){
        $("#modalSeven, .modal").show();
        $("#modalOne, #modalTwo,#modalThree, #modalFour, #modalFive, #modalSix, #modalEight,modal").hide();
     });

     $("#imgEight").click(function(){
        $("#modalEight, .modal").show();
        $("#modalOne, #modalTwo,#modalThree, #modalFour, #modalFive, #modalSix, #modalSeven,modal").hide();
        });

    $("#close").click(function(){
      
        $('.modal').hide();
     });

    });
