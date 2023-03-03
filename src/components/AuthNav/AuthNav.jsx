import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  
  return (
    <div>
      <NavLink className={css.navigation} to="/register">
        Register
      </NavLink>
      <NavLink className={css.navigation} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
