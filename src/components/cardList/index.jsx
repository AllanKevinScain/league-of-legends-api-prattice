import { Card } from '../card';
import './style.css';

export const CardList = ({ champions = [] }) => {
  return (
    <div className="container-list">
      {champions.map(champion => (
        <Card key={champion.id} {...champion} />
      ))}
    </div>
  );
};
