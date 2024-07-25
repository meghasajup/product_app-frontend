import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FormPage from './pages/FormPage';
import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/add-form",
        element: <FormPage />
    },
    {
        path: "/edit-form/:id",
        element: <FormPage />
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    },
]);
export default router;