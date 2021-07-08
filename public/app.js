var value;
var productID;

function setItem(abd) {
    value = abd.value;
    productID = abd.getAttribute("productID");
    let intRegex = /^\d+$/;
    let numberOfItems;
    if (!intRegex.test(value) || (value <= 0)) {
        alert('Please Enter valid numberofitem');
    } else {
        numberOfItems = value;
    }
}
function getCookie(arr) {
    let json_arr = JSON.stringify(arr.split("="))
    console.log(json_arr)
    return json_arr
}
function setCookie(id) {
    try{
        if (document.cookie === undefined) {
            alert("Please add number of items in text box");
        } else {
            document.cookie = id + "=" + document.cookie + ";";
            alert(document.cookie + " Product(s) with id " + id +
                " has been added to shopping cart!");
        }
    } catch (e) {
        console.log(e)
    }

}
