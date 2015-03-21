function load_item(items) {
    return{
        classification : items[0],
        name : items[1],
        price : items[2] ,
        unit : items[3]
    }
}
$(document).ready(function () {
    product_show()
});
function product_show() {
    var items=[];
    for(var number1= 0;number1<repertory().length;number1++){
        items[number1]=load_item(repertory()[number1]);
    }
    for(var number2= 0;number2<items.length;number2++){
        var items_code='<td>'+items[number2].classification+'</td><td>'+items[number2].name+'</td><td>'+items[number2].price+'</td><td>'+items[number2].unit+'</td>';
        $("#products_list").append(
            '<tr>'+items_code+'<td><button name="item" class="btn btn-info btn-xs button_add_item">加入购物车</button></td>'+'</tr>'
        );
    }
}