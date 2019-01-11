var nr1 = null;
var shenja = null;
var nr2 = null;


$("#clean-input").click(function () {
   $(".input").val(" ");
   $(".active").removeClass("active");
   nr1 = null;
   shenja = null;
   nr2 = null;
});

$(".digit").click(function () {
    if (nr1 == null && shenja == null && nr2 == null){
        nr1 = $(this).text();
        $(".input").val(nr1);
    }
    else if (nr1 != null && shenja == null && nr2 == null){
        nr1 = $(".input").val() + $(this).text();
        $(".input").val(nr1);
    }else if (nr1 != null && shenja != null && nr2 == null){
        nr2 = $(this).text();
        $(".input").val(nr2);
        $(".active").removeClass("active");
    }
    else if (nr1 != null && shenja != null && nr2 != null){
        nr2 = $(".input").val() + $(this).text();
        $(".input").val(nr2);
    }
});

$(".sign").click(function () {
   if (nr1 == null && shenja == null && nr2 == null){
       alert("errore");
   }
   else if (nr1 != null && shenja == null && nr2 == null){
       shenja = $(this).text();
       $(this).addClass("active");
   }
   else if (nr1 != null && shenja != null && nr2 == null){
       alert("errore");
   }
   else if (nr1 != null && shenja != null && nr2 != null){
       nr1 = veprim(parseFloat(nr1) , shenja , parseFloat(nr2));
       shenja = $(this).text();
       $(this).addClass("active");
       nr2 = null;
       $(".input").val();
   }
});

$("#barazim").click(function () {
   shuma = veprim(parseFloat(nr1) , shenja , parseFloat(nr2));
   $(".input").val(shuma);
});

$("#comma").click(function () {
    var inptText = $(".input").val();
    if (inptText.length > 0 && inptText.indexOf(".") === -1){
        $(".input").val(inptText + "." );
    }else {
        alert("errore");
    }
   // if (nr1 == null && shenja == null && nr2 == null){
   //     alert("errore");
   // }
   // else if (nr1 != null && shenja == null && nr2 == null){
   //    nr1 = $(".input").val() + $(this).text();
   //    $(".input").val(nr1);
   // }
   // else if (nr1 != null && shenja != null && nr2 == null){
   //     alert("errore");
   //  }
   //  else if (nr1 != null && shenja != null && nr2 != null){
   //     nr2 = $(".input").val() + $(this).text();
   //     $(".input").val(nr2);
   //  }
});

function veprim(nr1 , shenja , nr2) {
    if(shenja == "%"){
        return (nr1 % nr2);
    } else if(shenja == "/"){
        return nr1 / nr2
    } else if (shenja == "x"){
        return nr1 * nr2
    } else if (shenja == "-"){
        return nr1 - nr2
    } else if (shenja == "+"){
        return nr1 + nr2
    }
 }