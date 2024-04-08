let currentPath = 0;

function choosePath(path) {
  currentPath = path;
  showStory();
}

function showStory() {
  const storyElement = document.getElementById("story");
  const choicesElement = document.getElementById("choices");

  if (currentPath === 0) {
    storyElement.textContent =
      "Você é um aventureiro destemido em busca de um tesouro lendário na floresta encantada. Qual caminho você escolherá?";
    choicesElement.innerHTML = `
      <button onclick="choosePath(1)" class="game-btn">Seguir o caminho iluminado</button>
      <button onclick="choosePath(2)" class="game-btn">Explorar a trilha escura</button>
    `;
  } else if (currentPath === 1) {
    storyElement.textContent =
      "Você escolheu seguir o caminho iluminado. Encontrou uma ponte mágica que leva ao tesouro!";
    choicesElement.style.display = "none";
  } else if (currentPath === 2) {
    storyElement.textContent =
      "Você escolheu explorar a trilha escura. Encontrou uma caverna assustadora.";
    choicesElement.innerHTML = `
      <button onclick="choosePath(3)" class="game-btn">Entrar na caverna</button>
      <button onclick="choosePath(4)" class="game-btn">Continuar explorando a trilha</button>
    `;
  } else if (currentPath === 3) {
    storyElement.textContent =
      "Você entrou na caverna e encontrou um dragão adormecido. Corajosamente, você conseguiu pegar o tesouro sem acordá-lo!";
    choicesElement.style.display = "none";
  } else if (currentPath === 4) {
    storyElement.textContent =
      "Você continuou explorando a trilha escura e se perdeu na floresta. Não encontrou o tesouro.";
    choicesElement.style.display = "none";
  }
}

showStory();
