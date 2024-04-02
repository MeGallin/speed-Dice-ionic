import ReactDOM from 'react-dom/client';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();
import './App.css';

import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Dice from './components/Dice.tsx';
import { StrictMode } from 'react';
import Footer from './common/Footer.tsx';
import Header from './common/Header.tsx';

const rootRoute = createRootRoute({
  component: () => (
    <div
      style={{
        margin: '0 1rem 0 1rem',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <Header />
      <Outlet />
      <Footer />

      <TanStackRouterDevtools />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home</h3>
        Home component wil come here
      </div>
    );
  },
});

const diceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dice',
  component: function About() {
    return (
      <>
        <Dice />
      </>
    );
  },
});

const routeTree = rootRoute.addChildren([indexRoute, diceRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
