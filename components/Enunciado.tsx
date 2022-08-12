import styles from "../styles/Enunciado.module.css";
import QuestaoModel from "../model/questao";

interface EnunciadoProps {
  texto: string;
}

export default function Enunciado(props: EnunciadoProps) {
  return (
    <div className={styles.questao}>
      <span className={styles.texto}>{props.texto}</span>
    </div>
  );
}
