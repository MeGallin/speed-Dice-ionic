import { createLazyFileRoute } from '@tanstack/react-router';
import Dice from '../components/Dice';

export const Route = createLazyFileRoute('/dice')({
  component: () => (
    <>
      <Dice />
    </>
  ),
});
