const getChampions = async (lenguage = 'pt_BR') => {
  const fetcher = fetch(`http://ddragon.leagueoflegends.com/cdn/13.10.1/data/${lenguage}/champion.json`);
  
  const [champions] = await Promise.all([fetcher]);

  const championsJson = await champions.json();

  return championsJson;
}

export { getChampions };