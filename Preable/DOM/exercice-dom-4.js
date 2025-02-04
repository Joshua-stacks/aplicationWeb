function sombre() {
  let som = document.getElementsByTagName("body");
  for (let i = 0; i < som.length; i++) {
    som[i].style.backgroundColor = "#17202a";
  }
  let titre = document.getElementsByClassName("titre");
  for (let i = 0; i < titre.length; i++) {
    titre[i].style.color = "#3d7371";
  }
  let text = document.getElementsByClassName("texte");
  text[0].style.color = "#959d9d";
}
