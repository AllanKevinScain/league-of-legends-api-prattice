import P from 'prop-types';
import './style.css';

export const Card = ({ championName = '', nickname = '' }) => {
  if (!championName && !nickname) return <></>;

  return (
    <div className="container-card">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`}
        alt="thumbnail"
        className="thumbnail"
      />
      <h3 className="title">
        {championName} - {nickname}
      </h3>
      <span className="meet-link">
        Conheça mais{' '}
        <a
          href={`https://www.leagueoflegends.com/pt-br/champions/${championName.toLowerCase()}`}
          target="_blank"
          rel="noreferrer"
        >
          @aqui
        </a>
      </span>
    </div>
  );
};

Card.propTypes = {
  championName: P.string.isRequired,
  nickname: P.string.isRequired,
};

Card.defaultProps = {
  championName: 'Aatrox',
  nickname: 'a Espada Darkin',
};
