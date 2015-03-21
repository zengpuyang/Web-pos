$(document).ready(function () {
    var cart_button_number=0;
    $(".button_add_item").click(function () {
        cart_button_number+=1;
        sessionStorage.cart_button_text="购物车("+cart_button_number+")";
        $("#shopping_cart").text(sessionStorage.cart_button_text);
    });
    $("#shopping_cart").text(sessionStorage.cart_button_text);
});
