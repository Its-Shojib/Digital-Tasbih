// Set SubhanAllah
let subhanAllah = document.getElementById("subhanAllahDisplay");
let subhanAllahIncBtn = document.getElementById("subhanAllahIncrimentBtn");
let subhanAllahDecBtn = document.getElementById("subhanAllahDecrimentBtn");

// Set Alhamdulillah
let alhamdulillah = document.getElementById("alhamdulillahDisplay");
let alhamdulillahIncBtn = document.getElementById("alhamdulillahIncrimentBtn");
let alhamdulillahDecBtn = document.getElementById("alhamdulillahDecrimentBtn");

// Set AllahAkbar
let allahAkbar = document.getElementById("allahAkberDisplay");
let allahAkbarIncBtn = document.getElementById("allahAkberIncrimentBtn");
let allahAkbarDecBtn = document.getElementById("allahAkberDecrimentBtn");

// Set all value 0...
let subhanAllahInitial = 0;
let alhamdulillahInitial = 0;
let allahAkbarInitial = 0;


// SubhanAllah onclick Increment
subhanAllahIncBtn.addEventListener("click", function () {
    if (subhanAllahInitial == 33) {
        return alert("SubhanAllah Complete. Try another...");
    }
    subhanAllahInitial += 1;
    subhanAllah.innerText = subhanAllahInitial;
});
// SubhanAllah onclick Decrement
subhanAllahDecBtn.addEventListener("click", function () {
    if (subhanAllahInitial == 0) {
        return alert("You can't add negative value");
    }
    subhanAllahInitial -= 1;
    subhanAllah.innerText = subhanAllahInitial;

});

// Alhamdulillah onclick Increment
alhamdulillahIncBtn.addEventListener("click", function () {
    if (alhamdulillahInitial == 33) {
        return alert("Alhamdulillah Complete. Try another...");
    }
    alhamdulillahInitial += 1;
    alhamdulillah.innerText = alhamdulillahInitial;
});
// Alhamdulillah onclick Deccrement
alhamdulillahDecBtn.addEventListener("click", function () {
    if (alhamdulillahInitial == 0) {
        return alert("You can't add negative value");
    }
    alhamdulillahInitial -= 1;
    alhamdulillah.innerText = alhamdulillahInitial;

});

// AllahAkbar onclick Increment
allahAkbarIncBtn.addEventListener("click", function () {
    if (allahAkbarInitial == 33) {
        return alert("AllahAkbar Complete. Try another...");
    }
    allahAkbarInitial += 1;
    allahAkbar.innerText = allahAkbarInitial;
});
// AllahAkbar onclick Deccrement
allahAkbarDecBtn.addEventListener("click", function () {
    if (allahAkbarInitial == 0) {
        return alert("You can't add negative value");
    }
    allahAkbarInitial -= 1;
    allahAkbar.innerText = allahAkbarInitial;

});
// Reset Button
let resetbtn = document.getElementById("resetBtn");
resetbtn.addEventListener("click", function () {
    allahAkbarInitial = 0;
    subhanAllahInitial = 0;
    alhamdulillahInitial = 0;
    alhamdulillah.innerText = 0;
    subhanAllah.innerText = 0;
    allahAkbar.innerText = 0;
})