function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Mayk no light mode")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Gabriel Mateus Rossi tirando uma foto na academia"
    )
  }
}

// ABAIXO MOSTRA COMO O html.classList.toggle("light") funciona

//  if (html.classList.contains("light")) {
//    html.classList.remove("light")
//  } else {
//    html.classList.add("light")
//  }
