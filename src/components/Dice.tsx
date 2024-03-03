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
import { useState } from 'react';

const rollDice = () => Math.floor(Math.random() * 6) + 1;

const useDiceRoller = (initialValue: number | null = null) => {
  const [values, setValues] = useState<Array<number | null>>([
    initialValue,
    initialValue,
    initialValue,
  ]);

  const spin = () => {
    setValues(values.map(() => rollDice()));
  };

  const total = values.reduce((acc: number, value) => acc + (value ?? 0), 0);
  return { values, spin, total };
};

const Dice = () => {
  const { values, spin, total } = useDiceRoller();

  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <div className="dice-wrapper">
            {values.map((value, index) => (
              <span key={index}>
                {value === 1 ? (
                  <IonImg
                    src="../assets/1.png"
                    className="animate__animated animate__bounce"
                  ></IonImg>
                ) : null}
                {value === 2 ? (
                  <IonImg
                    src="../assets/2.png"
                    className="animate__animated animate__rollIn"
                  ></IonImg>
                ) : null}
                {value === 3 ? (
                  <IonImg
                    src="../assets/3.png"
                    className="animate__animated animate__rotateIn"
                  ></IonImg>
                ) : null}
                {value === 4 ? (
                  <IonImg
                    src="../assets/4.png"
                    className="animate__animated animate__rotateInDownLeft"
                  ></IonImg>
                ) : null}
                {value === 5 ? (
                  <IonImg
                    src="../assets/5.png"
                    className="animate__animated animate__flip"
                  ></IonImg>
                ) : null}
                {value === 6 ? (
                  <IonImg
                    src="../assets/6.png"
                    className="animate__animated animate__bounce"
                  ></IonImg>
                ) : null}
              </span>
            ))}
          </div>

          <IonCardSubtitle>Up to 6 times quicker</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
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
