import { useCallback, useEffect, useState } from 'react';
import { CardList, Header } from './components';
import { getChampions } from './utils/get-champions';

export const  App = () => {
  const [champions, setChampions] = useState();

  const handleLoadChampion = useCallback(async () => {
    const postsAndPhotos = await getChampions();
    console.log("🚀 ~ file: App.js:10 ~ handleLoadChampion ~ postsAndPhotos:", postsAndPhotos)

    const trsansformData = Object.values(postsAndPhotos.data).map((champion) => ({
      history: champion.blurb,
      id: crypto.randomUUID(),
      championName: champion.id,
      nickName: champion.title
    }));

    return setChampions(trsansformData)
  }, []);

  useEffect(() => {
    handleLoadChampion();
  }, [handleLoadChampion]);

  return (
      <div>
        <Header />
        <CardList champions={champions} />
      </div>
  );
}
