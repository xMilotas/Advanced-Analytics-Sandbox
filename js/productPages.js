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
        "order_grand_total"  : orderTotal,                                                        
        "order_id"           : orderID,                                                       
        "product_id"         : productID,                                              
        "product_name"       : productName,                                             
        "product_price"      : productPrice,                                               
        "product_quantity"   : productQuant                                                                                                 
};    

function readCookie(name) {
    var reString = '(?:(?:^|.*;\\s*)' + name + '\\s*\\=\\s*([^;]*).*$)|^.*$';
    var re = new RegExp(reString);
    var cookieValue = document.cookie.replace(re, "$1");
    if (!cookieValue) return undefined;
    return decodeURIComponent(cookieValue);
}

var cart = readCookie("Cart")
if (cart){
    var orderID = new Date().valueOf();
    var productID = 
    var productName =
    var productPrice =
    var productQuant =

    var orderTotal = 
}

