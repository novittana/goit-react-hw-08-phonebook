import { register } from '../redux/user/operations';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import css from './RegisterPage.module.css';

export function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { name, email, password } = event.target.elements;

    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(register(user));
    event.target.reset();
  };

  return (
    <form className={css.register_form} onSubmit={handleSubmit} style={{ width: '200px' }}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
}
