function code_show(items) {
    return _.map(items,function(parameter){
        var item=load_item(parameter);
        return '<td>'+item.classification+'</td><td>'+item.name+'</td><td>'+item.price+'</td><td>'+item.unit+'</td>'
    });
}
$(document).ready(function () {
    var items_code=code_show(repertory());
    for(var number2= 0;number2<items_code.length;number2++){
        var value='ITEMSB'+number2;
        $("#products_list").append(
            '<tr>'+items_code[number2]+'<td><button value="'+value+'B" class=" btn btn-info btn-xs button_add_item">加入购物车</button></td>'+'</tr>'
        );
    }
});