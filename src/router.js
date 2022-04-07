import { Router } from '@vaadin/router';



const outlet = document.getElementById('outlet');

const router = new Router(outlet);



router.setRoutes([

    {path: '/home',component: 'home-page'},

    {path: '/game',component: 'game-page'},

    { path: '(.*)', redirect: '/home' }

]);