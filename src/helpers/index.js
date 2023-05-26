const transformData = (response = []) => {
  const trsansformData = Object.values(response).map((champion, index) => ({
    index,
    history: champion.blurb,
    id: crypto.randomUUID(),
    championName: champion.id,
    nickname: champion.title
  }));

  return trsansformData;
}

const constructMatriz = (array, numberMaxInternalArray) => {
  const matriz = [];
  let aux = [];
  for (let i = 0; i < array.length; i++) {
    if ((i !== 0 && array[i].index % numberMaxInternalArray === 0) || array.length - 1 === i) {
      matriz.push(aux)
      aux = [];
    }
    aux.push(array[i]);
  }

  return matriz.filter(i => i);
}

export { transformData, constructMatriz };