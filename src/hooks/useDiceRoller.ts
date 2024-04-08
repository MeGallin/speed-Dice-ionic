import { useState } from 'react';
import { spinCount, totalsArray, displayValues } from '../state/dice';
import { useAtom } from 'jotai';

const rollDice = () => Math.floor(Math.random() * 6) + 1;

export const useDiceRoller = () => {
  const [values, setValues] = useAtom(displayValues);
  const [message, setMessage] = useState<string>(
    'Please pass the dice to the next person',
  );
  const [countSpin, setCountSpin] = useAtom(spinCount);
  const [totals, setTotals] = useAtom(totalsArray);

  const spin = () => {
    setCountSpin(countSpin + 1);
    const newValues = values.map(() => rollDice());
    setValues(newValues);

    const frequencyCounter: Record<number, number> = {};
    for (const item of newValues) {
      frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
    }

    let foundDuplicate = false;
    let foundTriplicate = false;
    for (const count of Object.values(frequencyCounter)) {
      if (count === 3) {
        foundTriplicate = true;
        break; // Exit the loop early if a triplicate is found
      } else if (count === 2) {
        foundDuplicate = true;
        // Don't break here because we need to check if there's a triplicate
      }
    }

    if (foundTriplicate) {
      setMessage('Triple !!!, Please move to home and spin again.');
    } else if (foundDuplicate) {
      setMessage('Double !!, Please spin again.');
    } else {
      setMessage('Please pass the dice to the next person');
    }

    const total = newValues.reduce((acc, value) => acc + (value ?? 0), 0);
    setTotals([...totals, total]); // Add the new total to the totals array
  };

  return { values, spin, message, countSpin, totals };
};
