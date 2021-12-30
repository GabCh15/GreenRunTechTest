import IRoute from '../interfaces/route';
import Main from '../components/Main';
import Login from '../components/Login';
import Home from '../components/Home';
import History from '../components/History';
import Search from '../components/Search';
import Profile from '../components/Profile';

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
        path: '/home',
        name: 'Home',
        component: Home,
        exact: true
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        exact: true
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        exact: true
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        exact: true
    },
   
]

export default routes;