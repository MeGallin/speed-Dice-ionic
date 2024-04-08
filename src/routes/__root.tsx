import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../common/Header';
import Footer from '../common/Footer';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
