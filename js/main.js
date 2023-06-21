const hamburguer = document.getElementById("nav__botaoMobile");
const listaMobile = document.getElementById("nav__listaMobile");
const hamburguerBg = document.getElementById("nav__bg");
const barra = document.querySelector(".cabecalho__nav__botao__barra");
const botaoTablet = document.getElementById("nav__botaoTablet");
const listaTablet = document.getElementById("nav__listaTablet");


botaoTablet.addEventListener("click", () => {
  if (listaTablet.style.display === "flex") {
    listaTablet.style.display = "none";
  } else {
    listaTablet.style.display = "flex";
  }
})

function desativaListaMobile() {
  listaMobile.style.display = "none";
  barra.style.backgroundColor = '#002F52';
  hamburguer.classList.add("cabecalho__nav__botao")
  hamburguer.classList.remove("cabecalho__nav__botao--ativo");
  hamburguerBg.style.display = "none";
}

function ativaListaMobile() {
  listaMobile.style.display = "flex";
  barra.style.backgroundColor = '#fff';
  hamburguer.classList.add("cabecalho__nav__botao--ativo");
  hamburguerBg.style.display = "block";
}

hamburguer.addEventListener("click", () => {
  if (listaMobile.style.display === "flex") {
    desativaListaMobile();
  } else {
    ativaListaMobile();
  }
})

// botaoTablet.addEventListener("click", () => {
//   if (listaTablet.style.display === "flex") {
//     listaTablet.style.display = "none";
//   } else {
//     listaTablet.style.display = "flex";
//   }
// })


// console.log(window.innerWidth)








