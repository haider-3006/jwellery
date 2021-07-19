
const product=[
    {
        name: "Golden Bangle",
        image: "https://assets0.mirraw.com/images/8189691/image_zoom.jpeg?1597055672",
        brand: "PC Jweller",
        price: 200000
    },
    {
        name: "Golden Ring",
        image:  "https://staticimg.titan.co.in/Tanishq/Catalog/51AC41FACAA00_1.jpg?impolicy=pqmed&imwidth=640",
        brand: "Malabar Gold",
        price: 20000
    },
    {
        name: "Gold Necklace",
        image: "https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/JKyylW1Hu9hpHN1cErmSije5cIW0PMzPOqEO4OOG.jpeg",
        brand: "Malabar Gold",
        price: 400000
    },
    {
        name: "Sliver Anklet",
        image: "https://cdn.shopify.com/s/files/1/0129/3622/products/99_0ee0ea32-0a58-4081-a8de-8f436a9d9ca1_1200x1406.jpg?v=1569172991",
        brand: "PC Jwellers",
        price: 2000
    },
    {
        name: "Diamond rig",
        image: "https://4.imimg.com/data4/XB/YL/MY-26801220/0-500x500.jpg",
        brand: "Tanishq",
        price: 60000
    },
    {
        name: "Diamond Necklace",
        image: "https://5.imimg.com/data5/OT/NR/MY-11009625/diamond-necklace-500x500.jpg",
        brand: "Tanishq",
        price: 500000
    },
   
]

if (localStorage.getItem("product") == null) {
    localStorage.setItem("product", JSON.stringify(product));
}

function showJwellery(d) {
    let product = d

    let product_div = document.getElementById("product")
    product_div.innerHTML = null

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

        let button = document.createElement("button")
        button.textContent = "Add to Cart"
        button.addEventListener("click", function () {

            let name_prod = JSON.parse(localStorage.getItem("added"))
            addToCart(el)
        
            button.onclick = el.button
        })
    
        div.append(image, p_name, p_brand, p_price, button)
        
        product_div.append(div)
    });
}

showJwellery(JSON.parse(localStorage.getItem("product")))

function showLocations() {
    let data = JSON.parse(localStorage.getItem("product"))
    data_div.innerHTML = null
    data.forEach(function (el) {
        appendLocations(el)


    });
}



showLocations()

function addToCart(obj) {
    let arr;
    arr = localStorage.getItem("product")
    if (arr == null) {
        arr = []
    }
    else {
        arr = JSON.parse(localStorage.getItem("product"))
    }
    arr.push(obj)

    localStorage.setItem("product", JSON.stringify(arr))

}

function LtoH() {
    let product = JSON.parse(localStorage.getItem("product"))
    product.sort(function (a, b) {
        return a.price-b.price

    })
    showJwellery(product)
}

function HtoL() {
    let product = JSON.parse(localStorage.getItem("product"))
    product.sort(function (a, b) {
        return b.price-a.price

    })
    showJwellery(product)
}

function filter() {
    let product = JSON.parse(localStorage.getItem("product"))
    product.filter(brand) 
        
    
    showJwellery(product)

}
