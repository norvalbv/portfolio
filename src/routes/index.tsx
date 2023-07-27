import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import { routes } from './MainRoutes';

const router = createBrowserRouter([
  {
    Component: App,
    children: [routes],
  },
]);

export default router;
