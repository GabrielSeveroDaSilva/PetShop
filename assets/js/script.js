
/**
 * Preloading
 */

var loader = document.getElementById("preloading");

window.addEventListener("load", function () {
  loader.style.display = "none";

  // Após o preloading estar oculto, adicione o estilo position: absolute à classe header
  const header = document.querySelector("[data-header]");
  if (header) {
    header.style.position = "fixed";
  }
});

/**
 * Adicionar evento ao elemento
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
 * Alternar barra de navegação
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

for (let i = 0; i < navbarLinks.length; i++) {
  addEventOnElem(navbarLinks[i], "click", closeNavbar);
}

/**
 * Ativar cabeçalho quando a janela for rolada para baixo até 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);




