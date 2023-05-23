import "./style.css";

export const Card = ({championName, nickname}) => {
  return (
    <div className="container-card">
      <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`} alt="thumbnail" className="thumbnail" />
      <h3 className="tittle">{championName} - {nickname}</h3>
      <span className="meet-link">
        Conheça mais <a href={`https://www.leagueoflegends.com/pt-br/champions/${championName.toLowerCase()}`} target="_blank" rel="noreferrer" >@aqui</a>
      </span>
    </div>
  );
}
