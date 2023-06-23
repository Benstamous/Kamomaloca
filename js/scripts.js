const el = document.querySelector("#dropdown");
const pork = 1;
const chicken = 2;
const beef = 3;
const lumpia = 4;
const porkImg = document.getElementById("porkImg");
const chickenImg = document.getElementById("chickenImg");
const beefImg = document.getElementById("beefImg");
const lumpiaImg = document.getElementById("lumpiaImg");

el.addEventListener("change", picChange);

togglePics(porkImg, false);
togglePics(chickenImg, false);
togglePics(beefImg, false);
togglePics(lumpiaImg, false);

function picChange() {
    const value = el.selectedIndex;
    if (value === pork) {
        togglePics(chickenImg, false);
        togglePics(beefImg, false);
        togglePics(lumpiaImg, false);
        togglePics(porkImg, true);
    }
    else if (value === chicken) {
        togglePics(porkImg, false);
        togglePics(chickenImg, true);
        togglePics(beefImg, false);
        togglePics(lumpiaImg, false);
    }
    else if (value === beef) {
        togglePics(porkImg, false);
        togglePics(chickenImg, false);
        togglePics(beefImg, true);
        togglePics(lumpiaImg, false);
    }
    else if (value === lumpia) {
        togglePics(porkImg, false);
        togglePics(chickenImg, false);
        togglePics(beefImg, false);
        togglePics(lumpiaImg, true);
    }
    else {
        togglePics(porkImg, false);
        togglePics(chickenImg, false);
        togglePics(beefImg, false);
        togglePics(lumpiaImg, false);
    }
}

function togglePics(pics, on) {
        if (on === true) {
            pics.style.display = "inline";
        } else {
            pics.style.display = "none";
        }
}

function subtractIt() {
    if (toNumber === 0) {
        quantityNumber.textContent = "0";
    }
    else {
        toNumber = parseInt(quantityNumber.textContent);
        toNumber--;
        quantityNumber.textContent = toNumber;
    }
}

function addIt() {
    toNumber++;
    quantityNumber.textContent = toNumber;
}

const quantity = document.querySelector("#quantity");
const minus = document.getElementById("minus");
const quantityNumber = document.getElementById("quantityNumber");
const plus = document.getElementById("plus");

const toNumber = parseInt(quantityNumber.textContent);

minus.addEventListener("click", subtractIt);
plus.addEventListener("click", addIt);

//$(function() {
//    $("#addMore").click(function(){
//        $("#wrappingDiv").clone().appendTo("#wrappingDiv")
//    });
//});