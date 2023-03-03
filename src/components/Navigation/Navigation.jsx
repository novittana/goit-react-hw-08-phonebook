import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.navigation} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.navigation} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
