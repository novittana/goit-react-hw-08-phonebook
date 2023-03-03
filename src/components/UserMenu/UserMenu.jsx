import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useAuth } from '../../hooks/useAuth';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.user_menu_wrap}>
      <p>{user.email}</p>
      <Button variant="contained" type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
