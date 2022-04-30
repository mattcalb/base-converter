var decimal = document.getElementById("decimal");
var binary = document.getElementById("binary");
var hex = document.getElementById("hex");

decimal.addEventListener("keyup", () => {
    binary.value = Number(decimal.value).toString(2);
    hex.value = Number(decimal.value).toString(16);
})