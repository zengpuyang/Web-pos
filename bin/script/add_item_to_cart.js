$(document).ready(function () {
    $("#shopping_cart").text(sessionStorage.cart_button_text);
    $("#cart_item_add");
});
    var n=_.chain(sessionStorage.products.split(','))
        .initial(2)
        .groupBy(function(parameter){return})
        .value();
    console.log(n);
