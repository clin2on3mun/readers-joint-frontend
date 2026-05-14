import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/HomePage';
import Dashboard from '@/pages/Dashboard';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';

const routes = createBrowserRouter([
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/dashboard',
        Component: Dashboard
    },


    {
        path: 'signup', 
        Component: SignUp
    },
    {
        path: 'login', 
        Component: Login
    }

])

export default routes
