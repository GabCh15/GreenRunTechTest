import IRoute from '../interfaces/route';
import Main from '../components/Main';
import Login from '../components/Login';
import Register from '../components/Register';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        exact: true,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        exact: true
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        exact: true
    },
]

export default routes;