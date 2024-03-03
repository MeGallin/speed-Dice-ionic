import React, { useState } from 'react';
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
  const [message, setMessage] = useState<string>('Please pass the dice to the next person');

  const spin = () => {
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
  };

  const total = values.reduce((acc: number, value) => acc + (value ?? 0), 0);
  return { values, spin, total, message };
};

const Dice = () => {
  const { values, spin, total, message } = useDiceRoller();
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
          <div>Please move forward by {total} spaces</div>
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
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Dice;