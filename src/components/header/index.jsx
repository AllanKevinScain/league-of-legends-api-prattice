import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Drawer } from '../drawer';
import { MenuIcon } from '../icons';
import './style.css';

export const Header = ({ value, handleChange }) => {
  const { width } = useMediaQuery();

  const [drawerIsOpen, setDrawerIsOpen] = useState();

  if (width <= 820) {
    return (
      <>
        <nav className="container-header">
          <img
            src={`https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png`}
            alt="riot-logo"
            className="riot-logo"
          />

          <input className="search-styles" value={value} onChange={handleChange} />

          <MenuIcon onClick={() => setDrawerIsOpen(true)} w="30" h="30" color="#23bec9" />
        </nav>
        <Drawer drawerIsOpen={drawerIsOpen} onClose={() => setDrawerIsOpen(false)} />
      </>
    );
  }

  return (
    <nav className="container-header">
      <img
        src={`https://logo-marque.com/wp-content/uploads/2020/11/League-of-Legends-Embleme.png`}
        alt="riot-logo"
        className="riot-logo"
      />

      <input className="search-styles" value={value} onChange={handleChange} />

      <li className="nav-links">
        <ul>
          <a href="/">Quem somos</a>
        </ul>
        <ul>
          <a href="/">Campeões</a>
        </ul>
        <ul>
          <a href="/">Meu Perfil</a>
        </ul>
      </li>
    </nav>
  );
};
