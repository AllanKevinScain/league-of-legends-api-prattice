const transformData = (response = []) => {
  const trsansformData = Object.values(response).map((champion) => ({
    history: champion.blurb,
    id: crypto.randomUUID(),
    championName: champion.id,
    nickName: champion.title
  }));

  return trsansformData;
}

export { transformData };