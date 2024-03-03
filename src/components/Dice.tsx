import { useState } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonIcon,
  IonImg,
} from '@ionic/react';
import './Dice.css';
import { arrowForwardOutline } from 'ionicons/icons';

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const useDiceRoller = (initialValue: number | null = null) => {
  const [values, setValues] = useState<Array<number | null>>([
    initialValue,
    initialValue,
    initialValue,
  ]);
  const [message, setMessage] = useState<string>(
    'Please pass the dice to the next person',
  );
  const [spinCount, setSpinCount] = useState<number>(0); // State for counting spins
  const [totals, setTotals] = useState<Array<number>>([]); // State for storing totals of each spin

  const spin = () => {
    setSpinCount(spinCount + 1);
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
      setMessage('Triple, please move to home and spin again');
    } else if (foundDuplicate) {
      setMessage('Double, please spin again');
    } else {
      setMessage('Please pass the dice to the next person');
    }

    const total = newValues.reduce((acc, value) => acc + (value ?? 0), 0);
    setTotals([...totals, total]); // Add the new total to the totals array
  };

  return { values, spin, message, spinCount, totals };
};

const Dice = () => {
  const { values, spin, message, spinCount, totals } = useDiceRoller();
  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <div className="dice-wrapper">
            {values.map((value, index) => (
              <span key={index}>
                {value && (
                  <IonImg
                    src={`../assets/${value}.png`}
                    className="animate__animated animate__bounce"
                  ></IonImg>
                )}
              </span>
            ))}
          </div>
          <IonCardSubtitle>Up to 6 times quicker</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <div>{message}</div>
          <div>
            Please move forward by {totals[totals.length - 1] || 0} spaces
          </div>{' '}
          {/* Display the last total */}
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonButton
            expand="full"
            onClick={spin}
            slot="start"
            fill="outline"
            size="large"
          >
            Spin The Dice <IonIcon icon={arrowForwardOutline}></IonIcon>
          </IonButton>
          <div>Spin Count: {spinCount}</div>{' '}
          {/* Display the number of times spin was called */}
          <div>Totals: {totals.map((total, index) => `{${index + 1}}${total}`).join(', ')}</div>
          {/* Display the totals array */}
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Dice;
