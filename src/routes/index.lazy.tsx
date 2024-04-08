import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: () => (
    <>
      <h1>Home page</h1>
    </>
  ),
});
