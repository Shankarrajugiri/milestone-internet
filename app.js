let plus = document.getElementById("plusIcon");
let minus = document.getElementById("minusIcon");
let contentExpand = document.getElementById("content");
let plusButton = document.getElementById("plusButton");
plusButton.onclick = function() {
    plus.classList.toggle("d-none");
    minus.classList.toggle("d-none");
    contentExpand.classList.toggle("content-expand");
}