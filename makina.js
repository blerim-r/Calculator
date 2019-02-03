var nr1 = null;
var shenja = null;
var nr2 = null;
var calcInput = $('#calcInput');

$("#clean-input").click(function () {
   calcInput.val(" ");
   $(".active").removeClass("active");
   nr1 = null;
   shenja = null;
   nr2 = null;
});

$(".digit").click(function () {
    if (nr1 == null && shenja == null && nr2 == null){
        nr1 = $(this).text();
        calcInput.val(nr1);
    }
    else if (nr1 != null && shenja == null && nr2 == null){
        nr1 = calcInput.val() + $(this).text();
        calcInput.val(nr1);
    }else if (nr1 != null && shenja != null && nr2 == null){
        nr2 = $(this).text();
        calcInput.val(nr2);
        $(".active").removeClass("active");
    }
    else if (nr1 != null && shenja != null && nr2 != null){
        nr2 = calcInput.val() + $(this).text();
        calcInput.val(nr2);
    }
});

$(".sign").click(function () {
   if (nr1 == null && shenja == null && nr2 == null){
       alert("Error");
   }
   else if (nr1 != null && shenja == null && nr2 == null){
       shenja = $(this).text();
       $(this).addClass("active");
   }
   else if (nr1 != null && shenja != null && nr2 == null){
       alert("Error");
   }
   else if (nr1 != null && shenja != null && nr2 != null){
       nr1 = veprim(parseFloat(nr1) , shenja , parseFloat(nr2));
       shenja = $(this).text();
       $(this).addClass("active");
       nr2 = null;
       calcInput.val();
   }
});

$("#barazim").click(function () {
   shuma = veprim(parseFloat(nr1) , shenja , parseFloat(nr2));
   calcInput.val(shuma);
});

$("#comma").click(function () {
    var inptText = calcInput.val();
    if (inptText.length > 0 && inptText.indexOf(".") === -1){
        calcInput.val(inptText + "." );
    }else {
        alert("Error");
    }
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