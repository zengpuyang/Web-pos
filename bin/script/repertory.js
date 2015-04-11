function repertory() {
    return [
        ["饮料","可口可乐",3,"瓶"],
        ["饮料","雪碧",3,"瓶"],
        ["水果","苹果",5.5,"斤"],
        ["水果","荔枝",5,"斤"],
        ["生活用品","电池",2,"个"],
        ["食品","方便面",4.5,"袋"]
    ]
}
function load_item(items) {
    return{
        classification : items[0],
        name : items[1],
        price : items[2] ,
        unit : items[3]
    }
}