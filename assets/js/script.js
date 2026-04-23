'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



/**
 * simulador
 */

const systems = document.querySelectorAll('input[name="system"]')
const cameraRange = document.getElementById("cameraRange")
const cameraValue = document.getElementById("cameraValue")

const remoteAccess = document.getElementById("remoteAccess")
const cloudStorage = document.getElementById("cloudStorage")

const priceDisplay = document.getElementById("priceDisplay")

const whatsappBtn = document.getElementById("whatsappQuote")

function calculatePrice(){

let systemPrice = 0

systems.forEach(system=>{
if(system.checked){
systemPrice = parseInt(system.value)
}
})

let cameras = parseInt(cameraRange.value)

let total = systemPrice * cameras

if(remoteAccess.checked) total += 50000
if(cloudStorage.checked) total += 30000

cameraValue.innerText = cameras + " câmeras"

priceDisplay.innerText = total.toLocaleString() + " Kz"

return total

}

document.querySelectorAll("input").forEach(el=>{
el.addEventListener("input",calculatePrice)
})

whatsappBtn.addEventListener("click",()=>{

let total = calculatePrice()

let message =
`Olá, fiz uma simulação no site da TAE Security.%0A
Sistema: ${document.querySelector('input[name="system"]:checked').parentElement.innerText}%0A
Câmeras: ${cameraRange.value}%0A
Acesso remoto: ${remoteAccess.checked ? "Sim":"Não"}%0A
Cloud: ${cloudStorage.checked ? "Sim":"Não"}%0A
Estimativa: ${total.toLocaleString()} Kz`

let phone = "244949535092"

window.open(`https://wa.me/${phone}?text=${message}`)

})

calculatePrice()










