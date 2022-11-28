function checkGrau(dificuldade, grau) {
  switch (grau) {
    case "dif-facil":
      return [1, 2, 3].includes(dificuldade);
    case "dif-medio":
      return [4, 5, 6, 7].includes(dificuldade);
    case "dif-dificil":
      return [8, 9, 10].includes(dificuldade);
    default:
      return false;
  }
}

export function filtrarDados(dados, tipo, ordem, grauDificuldade) {
  const dadosFiltradosPorTipo = dados.filter((campeao) =>
    campeao.tags.includes(tipo)
  );
  if (ordem === "Dificuldade") {
    const dadosFiltradosPorGrau = dadosFiltradosPorTipo.filter((campeao) =>
      checkGrau(campeao.info.difficulty, grauDificuldade)
    );
    return dadosFiltradosPorGrau;
  }
  return dadosFiltradosPorTipo;
}

export function ordenarDados(dados, ordem, valor) {
  if (ordem === "Nome") {
    dados.sort((a, b) => {
      if (a.name === b.name) {
        return 0;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });
  } else {
    dados.sort((a, b) => a.info.difficulty - b.info.difficulty);
  }
  if (valor === "ordem-decrescente") {
    dados.reverse();
  }
  return dados;
}

export function computeStats(dadosFiltrados, todosDados) {
  return {
    percentual: ((dadosFiltrados.length / todosDados.length) * 100).toFixed(2),
  };
}
