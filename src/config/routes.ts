import IRoute from '../interfaces/route';
import Main from '../components/Main';
import Login from '../components/Login';

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
]

export default routes;