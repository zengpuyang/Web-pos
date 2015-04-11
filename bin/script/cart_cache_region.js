function click_item_number_array() {
    return _.chain(sessionStorage.click_item_value.split("B"))
        .groupBy(function(parameter){return parseInt(parameter)})
        .toArray()
        .map(function(parameter){return [parseInt(parameter[0]),parameter.length]})
        .value();
}
$(document).ready(function () {
    $(".button_add_item").click(function () {
        sessionStorage.click_item_value+=$(this).context.value;
        sessionStorage.products=click_item_number_array();
        var click_item_count= _.last(sessionStorage.products.split(","))-1;
        sessionStorage.cart_button_text="购物车("+click_item_count+")";
        $("#shopping_cart").text(sessionStorage.cart_button_text);
    });
    $("#shopping_cart").text(sessionStorage.cart_button_text);
});
