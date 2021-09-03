const contantScrolShow = document.querySelector(".contantScrolShow");
const main = document.querySelector(".main");

window.addEventListener("scroll", function man() {
    let a = document.documentElement.scrollTop;
    let mainHeight = main.clientHeight - window.innerHeight;
    contantScrolShow.style.width = (a / mainHeight) * 100 + "%";

})