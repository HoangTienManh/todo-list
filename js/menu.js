
function getEle(selector) {
    return document.querySelector(selector)
}

function getEleAll(selector) {
    return document.querySelectorAll(selector)
}

let menuOption = getEle(".main__menu-option")
let menuOpen = getEle("#open")
let menuShutdown = getEle("#shutdown")

menuOpen.onclick = (e) => {
    menuOption.classList.toggle("active")
    menuOpen.style.transform = "rotateY(180deg)"
    menuShutdown.style.transform = "rotateY(0)"
}
menuShutdown.onclick = (e) => {
    menuOption.classList.toggle("active")
    menuOpen.style.transform = "rotateY(0)"
    menuShutdown.style.transform = "rotateY(-180deg)"
}


export {menuOpen, menuShutdown}
