import P from 'prop-types';
import { CloseIcon } from '../icons';

import './style.css';

export const Drawer = ({ drawerIsOpen, onClose }) => {
  return (
    drawerIsOpen && (
      <div className="drawer-container">
        <div className="blur-container" onClick={onClose}></div>
        <div className="drawer-body">
          <CloseIcon onClick={onClose} w="30" h="30" color="#23bec9" />
          <li className="drawer-links">
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
        </div>
      </div>
    )
  );
};

Drawer.propTypes = {
  drawerIsOpen: P.bool.isRequired,
  onClose: P.func.isRequired,
};

Drawer.defaultProps = {
  drawerIsOpen: false,
  onClose: () => null,
};
