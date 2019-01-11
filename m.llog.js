var nr1 = null;
var shenja = null;
var nr2 = null;


$("#clean-input").click(function () {
    $(".input").val('');
    $(".active").removeClass("active");
    nr1 = null;
    nr2 = null;
    shenja = null;
});

$(".digit").click(function () {
    if (nr1 == null && nr2 == null && shenja ==null){
        nr1 = $(this).text();
        $(".input").val(nr1);
    }else if (nr1 != null && nr2 == null && shenja == null){
        nr1 = $(".input").val() + $(this).text();
        $(".input").val(nr1);
    }else if (nr1 != null && shenja != null && nr2 == null){
        nr2 = $(this).text();
        $(".input").val(nr2);
        $(".active").removeClass("active");


    }else if (nr1 != null && shenja != null && nr2 != null){
        nr2 = $(".input").val() + $(this).text();
        $(".input").val(nr2);
    }
});

$(".sign").click(function () {
    if (nr1 == null && nr2 == null && shenja == null){
        alert("error");
    } else  if (nr1 != null && nr2 == null && shenja == null){
        shenja = $(this).text();
        $(this).addClass("active");
    }else if (nr1 != null && nr2 == null && shenja != null) {
        alert("error");
    }else  if (nr1 != null && shenja != null && nr2 != null){
        nr1 = vperim(parseFloat(nr1), parseFloat(nr2), shenja);
        shenja = $(this).text();
        nr2 = null ;
        $(".input").val(nr1);
    }
});

$('#comma').click(function () {
    var inputText = $(".input").val();
    if (inputText.length > 0 && inputText.indexOf('.') === -1) {
        $(".input").val(inputText + '.');
    } else {
        alert('Error');
    }
});

$('#barazim').click(function () {
    shuma = vperim(parseFloat(nr1),parseFloat(nr2),shenja);
    $(".input").val(shuma);
});

function vperim(nr1, nr2, shenje) {
    if (shenje == '+') {
        return nr1 + nr2;
    } else if (shenje == '-') {
        return nr1 - nr2;
    } else if (shenje == '/') {
        return nr1 / nr2;
    } else if (shenje == '%') {
        return nr1 % nr2;
    } else if (shenje == 'x') {
        return nr1 * nr2;
    }
}
