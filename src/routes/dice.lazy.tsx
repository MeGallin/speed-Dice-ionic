import { createLazyFileRoute } from '@tanstack/react-router';
import Dice from '../components/Dice';

export const Route = createLazyFileRoute('/dice')({
  component: About,
});

function About() {
  return (
    <div className="">
      Hello from dice
      <Dice />
    </div>
  );
}
