import { useDispatch } from 'react-redux';
import { login } from '../redux/user/operations';
import Button from '@mui/material/Button';
import css from './LoginPage.module.css';

export function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(login(user));
    event.target.reset();
  };
  return (
    <form className={css.login_form} onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
}
