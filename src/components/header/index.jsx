import "./style.css";

export const Header = () => {
  return (
    <nav className="container-header">
      <img src={`https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png`} alt="riot-logo" className="riot-logo" />
 
      <li className="nav-links">
        <ul><a href="/">Quem somos</a></ul>
        <ul><a href="/">Campeões</a></ul>
        <ul><a href="/">Meu Perfil</a></ul>
      </li>
    </nav>
  );
}
