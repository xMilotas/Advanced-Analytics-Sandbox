var quant = document.querySelector("#prodQuant").value
var productName = document.querySelector("#prodName").innerHTML
var productPrice = document.querySelector("#prodPrice").innerHTML

function addToCart(){
    utag.link({
        "product_id": [productPrice.split(".")[0]+"123456"],
        "product_name": [productName],
        "product_quantity": [quant],
        "product_price": [productPrice],
        "product_brand": ["Clothing"],
        "event_type": "cart",
        "event_action": "add"
    })
}

var utag_data = { 
    "page_type"     : "product_view",
    "product_id"    : [productPrice.split(".")[0]+"123456"],
    "product_name"  :  productName,
    "country"                : "DE",                                                             
    "currency_code"          : "EUR",                                                            
    "division"               : "pt",                                                             
    "ip_anonymization"       : "1",                                                              
    "language"               : "DE",                                                             
    "name"                   : "Test Site",                                             
    "page_breadcrumb"        : ["product"],  
    "page_name"              :  window.location.pathname                      
};

try {
    var quant = document.querySelector("#prodQuant").value
  }
  catch(error) {
    console.error(error);
  }
  




  var utag_data = { 
    "page_type"     : "product_view",
    "product_id"    : [productPrice.split(".")[0]+"123456"],
    "product_name"  :  productName,
    "country"                : "DE",                                                             
    "currency_code"          : "EUR",                                                            
    "division"               : "pt",                                                             
    "ip_anonymization"       : "1",                                                              
    "language"               : "DE",                                                             
    "name"                   : "Test Site",                                             
    "page_breadcrumb"        : ["product"],  
    "page_name"              :  window.location.pathname                      
};

var cart = []

function updateCart(){
var products = []


}

// ProductIDs
// Tank Top       Shoes      Polo
["35123456", "45123456","65123456"]



/*

Cart-Add (utag.link)
On cart page: All updates to the cart via utag.link

onProceed to checkout:
utag_data object with cart_prodcut_id etc.
checkout_step=1





*/

function readCookie(name) {
    var reString = '(?:(?:^|.*;\\s*)' + name + '\\s*\\=\\s*([^;]*).*$)|^.*$';
    var re = new RegExp(reString);
    var cookieValue = document.cookie.replace(re, "$1");
    if (!cookieValue) return undefined;
    return decodeURIComponent(cookieValue);
}

var cart = readCookie("Cart")
var productID = []
var productName = []
var productPrice = []
var productQuant = []
var productBrand = []
var orderTotal = 0;
if (cart){
    // Get all items in cart
    cartItems = cart.split(";");
    // Loop trough all items and get the corresponding values:
    for (var item of cartItems){
    item = item.split(",")
    productID.push(item[0].split(":")[1])
    productName.push(item[1].split(":")[1])
    productPrice.push(item[2].split(":")[1])
    productQuant.push(item[3].split(":")[1])
    productBrand.push(item[4].split(":")[1])
    }
    var orderID = new Date().valueOf();
    for (let index = 0; index < productPrice.length; index++) {
        orderTotal+= productPrice[index];
        
    }
}

var utag_data = {                                                                
        "country"                : "DE",                                                             
        "currency_code"          : "EUR",                                                            
        "division"               : "pt",                                                             
        "ip_anonymization"       : "1",                                                              
        "language"               : "DE",                                                             
        "name"                   : "Test Site",                                             
        "page_breadcrumb"        : ["Checkout", "Order Confirmation"],  
        "page_type"              : "purchase",
        "page_name"              :  window.location.pathname,    
        "order_grand_total"     : orderTotal,                                                        
        "order_id"              : orderID,                                                       
        "product_id"            : productID,                                              
        "product_name"          : productName,                                             
        "product_price"         : productPrice,   
        "product_brand"         : productBrand,                                            
        "product_quantity"      : productQuant                                                                                                 
};    
