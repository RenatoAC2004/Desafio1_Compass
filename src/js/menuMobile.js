const menuButton = document.getElementById("menuMobile");
const navItems = document.getElementById("itemsNav");
const logo = document.querySelector(".logoMobile")

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("ativo");
  navItems.classList.toggle("ativo");
  logo.classList.toggle("ativo")

  const icone = menuButton.querySelector('img')
  if(icone.src.includes("menu.svg")){
    icone.src = "images/fechar.svg"
  } else {
    icone.src = "images/menu.svg"
  }
});
