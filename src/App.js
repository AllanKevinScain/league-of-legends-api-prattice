import { useCallback, useEffect, useMemo, useState } from 'react';
import { CardList, Header/* , Navigation */ } from './components';
import { getChampions } from './utils/get-champions';
import { transformData } from './helpers';

export const  App = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState('');

  const filteredChampions = useMemo(() => {
    const filtered = champions.filter(champ => champ.championName.toLowerCase().includes(search.toLowerCase()));
    
    return !!search ? filtered : champions;
  }, [search, champions]);

  const handleChange = (e) => setSearch(e.target.value);

  const handleLoadChampion = useCallback(async () => {
    const postsAndPhotos = await getChampions();
    const trsansformData = transformData(postsAndPhotos.data);

    return setChampions(trsansformData)
  }, []);

  useEffect(() => {
    handleLoadChampion();
  }, [handleLoadChampion]);

  return (
      <>
        <Header value={search} handleChange={handleChange} />
        {/* <Navigation /> */}
        <CardList champions={filteredChampions} />
      </>
  );
}
