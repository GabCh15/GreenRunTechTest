import IRoute from '../interfaces/route';
import Home from '../components/Home';
import History from '../components/History';
import Search from '../components/Search';
import Profile from '../components/Profile';

const routesPrivate: IRoute[] = [
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

export default routesPrivate;