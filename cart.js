
function showJwellery(d) {
    let product = d

    let product_div = document.getElementById("product")


    product.forEach(function (el) {
        let div = document.createElement("div")
    
        let p_name = document.createElement("p")
        p_name.innerHTML = el.name

        let p_brand = document.createElement("p")
        p_brand.innerHTML = el.brand

        let p_price = document.createElement("p")
        p_price.innerHTML = el.price

        let image = document.createElement("img")
        image.src = el.image
    
        div.append(image, p_name, p_brand, p_price)
        product_div.append(div)
    });
}

showJwellery(JSON.parse(localStorage.getItem("product")))

function showCart() {
    let data = JSON.parse(localStorage.getItem("product"))
    data_div.innerHTML = null
    data.forEach(function (el) {
        appendLocations(el)


    });

}
showCart();


var count = 0
var cart_items = JSON.parse(localStorage.getItem("product"))
function totalItems() {
    var total = document.getElementById("total")
    var div2 = document.createElement("div2")
    var total_item = document.createElement("p")
    total_item.innerHTML = `Total Item-${cart_items.length}`
    var total_price = document.createElement("p")
    
    
    
    // var code = document.getElementById("promo_code").value
    for (let i = 0; i < cart_items.length; i++) {
        count += Number(cart_items[i].price)
        total_price.innerHTML = `Total Price-${Number(count)}`
    }
    
    
    
    if (promoCode(count)) {
        total_price.innerHTML = `Total Price-${Number(count)}`
    }
    

    
    div2.append(total_item, total_price)

    total.append(div2)
    
//return count
}
totalItems()

function checkout() {
    window.location.href = "checkout.html"
}