import { useCallback, useEffect, useMemo, useState } from 'react';
import { CardList, Header, Navigation } from './components';
import { getChampions } from './utils/get-champions';
import { transformData, constructMatriz } from './helpers';

export const App = () => {
  const [champions, setChampions] = useState([]);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);

  const filteredChampions = useMemo(() => {
    const filtered = champions.filter((champ) => champ.championName.toLowerCase().includes(search.toLowerCase()));

    return filtered;
  }, [champions, search]);

  const handleChange = (e) => setSearch(e.target.value);

  const handleLoadChampion = useCallback(async () => {
    const postsAndPhotos = await getChampions();
    const trsansformData = transformData(postsAndPhotos.data);

    return setChampions(trsansformData);
  }, []);

  useEffect(() => {
    handleLoadChampion();
  }, [handleLoadChampion]);

  return (
    <div className="container">
      <Header value={search} handleChange={handleChange} />

      <CardList champions={search ? filteredChampions : constructMatriz(champions, 8)[offset]} />

      {!search && (
        <Navigation
          offset={offset}
          totalPages={constructMatriz(champions, 8).length}
          handleAdd={() => setOffset((state) => state + 1)}
          handleDecrease={() => setOffset((state) => state - 1)}
        />
      )}
    </div>
  );
};
