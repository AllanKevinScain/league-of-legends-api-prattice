import P from 'prop-types';
import { Card } from '../card';
import './style.css';

export const CardList = ({ champions = [] }) => {
  return (
    <div className="container-list">
      {champions.map((champion) => (
        <Card key={champion.id} championName={champion.championName} nickname={champion.nickname} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  champions: P.arrayOf(
    P.shape({
      index: P.number,
      history: P.string,
      id: P.string,
      championName: P.string.isRequired,
      nickname: P.string.isRequired,
    }),
  ),
};

CardList.defaultProps = {
  champions: [
    {
      index: 0,
      history:
        'Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de...',
      id: '01373b0a-86fa-44ae-a7e5-e630ef961f98',
      championName: 'Aatrox',
      nickname: 'a Espada Darkin',
    },
  ],
};
