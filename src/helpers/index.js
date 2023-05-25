const transformData = (response = []) => {
  const trsansformData = Object.values(response).map((champion) => ({
    history: champion.blurb,
    id: crypto.randomUUID(),
    championName: champion.id,
    nickname: champion.title
  }));

  return trsansformData;
}

export { transformData };