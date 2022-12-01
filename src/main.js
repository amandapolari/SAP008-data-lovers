import data from "./data/lol/lol.js";
import { computeStats, filtrarDados, ordenarDados } from "./data.js";

const todosDados = Object.values(data.data);
const formPesquisar = document.querySelector("#search-form");
const pFilterCalculation = document.querySelector("#filter-calculation");

// CRIANDO A FUNÇÃO QUE CRIA OS CARDS:
function criaCard(champs) {
  return champs
    .map(
      (champ) =>
        `
            <div class="cards">
              <div class="card-in">
                  <div class="card-front">
                      <img class="imagem-do-card" src="${champ.splash}">
                      <p class="name-do-card"><strong>${champ.name}</strong></p>
                      <p class="titulo-do-card"><i>${champ.title}</i></p>
                  </div>
                  <div class="card-back">
                    <ul class="info-do-card">
                        <li>Ataque: ${champ.info["attack"]}</li>
                        <li>Defesa: ${champ.info["defense"]}</li>
                        <li>Magia: ${champ.info["magic"]}</li>
                        <li>Dificuldade: ${champ.info["difficulty"]}</li>
                        <li>Tipo: </li> 
                        <li>${champ.tags.join(", ")}</li>
                    </ul>
                  </div> 
              </div>
            </div>
        `
    )
    .join("");
}

function mostrarCards(champs) {
  const template = criaCard(champs);
  document.getElementById("section-change").innerHTML = template;
}

// Declarando função de mudança de opção:
function pesquisarSubmitForm(event) {
  event.preventDefault();

  const tipo = event.target[0].value;
  const selectOrdenar = event.target[1];
  const valorOrdem = selectOrdenar.value;
  const indiceSelcioando = selectOrdenar.selectedIndex;
  const ordem = selectOrdenar[indiceSelcioando].parentElement.label;

  const dadosFiltrados = filtrarDados(todosDados, tipo, ordem, valorOrdem);
  const percentualFiltro = computeStats(dadosFiltrados, todosDados).percentual;
  pFilterCalculation.innerHTML = `Total encontrado ${dadosFiltrados.length}, correspondendo à ${percentualFiltro} % do total de Campeões`;
  mostrarCards(ordenarDados(dadosFiltrados, ordem, valorOrdem));
}

formPesquisar.addEventListener("submit", pesquisarSubmitForm);
//---

// Botão Return
const botaoRetornar = document.getElementById("btn-return");

botaoRetornar.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// função do banner
const botao1 = document.getElementById("banner-one");
const botao2 = document.getElementById("banner-two");
const botao3 = document.getElementById("banner-three");

function direcionarBanner(event) {
  const idDaFoto = event.srcElement.id;
  const selectPesquisar = document.getElementById("pesquisar-por");
  let valorSelecionado;

  if (idDaFoto === "foto-1") {
    valorSelecionado = "Marksman";
  } else if (idDaFoto === "foto-2") {
    valorSelecionado = "Assassin";
  } else {
    valorSelecionado = "Support";
  }

  const dadosFiltrados = filtrarDados(
    todosDados,
    valorSelecionado,
    "Dificuldade",
    "dif-facil"
  );
  selectPesquisar.value = valorSelecionado;
  const percentualFiltro = computeStats(dadosFiltrados, todosDados).percentual;
  pFilterCalculation.innerHTML = `Total encontrado ${dadosFiltrados.length}, correspondendo à ${percentualFiltro} % do total de Campeões`;
  mostrarCards(ordenarDados(dadosFiltrados, "Dificuldade", "dif-facil"));
}

botao1.addEventListener("click", direcionarBanner);
botao2.addEventListener("click", direcionarBanner);
botao3.addEventListener("click", direcionarBanner);
