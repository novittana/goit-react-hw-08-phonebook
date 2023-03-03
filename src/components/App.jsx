import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { Routes, Route, Navigate} from 'react-router-dom';
import { refreshUser } from '../redux/user/operations';
import { useAuth } from '../hooks/useAuth';
import { ContactsPage } from '../pages/ContactsPage';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}
