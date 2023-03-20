
function number(){

    let num = document.getElementById("value");
    let me = num.innerHTML;
    ++me;
    document.getElementById("value").innerHTML = me;
   console.log(me);
}