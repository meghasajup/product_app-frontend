import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FormPage from './pages/FormPage';
import { createBrowserRouter, Navigate } from "react-router-dom";
import useAuthStore from './store/authStore';

const PrivateRoute = ({children}) => {
    const { isAuth } = useAuthStore();
    return isAuth ? children : <Navigate to="/login" />
  };

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <PrivateRoute><HomePage /></PrivateRoute>
    },
    {
        path: "/add-form",
        element: <PrivateRoute><FormPage /></PrivateRoute>
    },
    {
        path: "/edit-form/:id",
        element: <PrivateRoute><FormPage /></PrivateRoute>
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    },
]);
export default router;