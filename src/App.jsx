import Fluxible from 'fluxible';
import { RouteStore } from 'fluxible-router';
import routes from './configs/routes';

import Application from './components/Application';

import ExampleStore from './stores/ExampleStore.jsx';

let AppRouteStore = RouteStore.withStaticRoutes(routes);

const app = new Fluxible({
    component: Application,
    stores: [
        AppRouteStore,
        ExampleStore
    ]
});

export default app;
