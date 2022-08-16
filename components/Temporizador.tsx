import { CountdownCircleTimer } from "../node_modules/react-countdown-circle-timer/lib/index";
import styles from "../styles/Temporizador.module.css";

interface TemporizadorProps {
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={props.duracao}
        size={100}
        isPlaying
        onComplete={props.tempoEsgotado}
        colors={["#2BAA6D", "#F7B801", "#A30000"]}
        colorsTime={[8, 4, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
