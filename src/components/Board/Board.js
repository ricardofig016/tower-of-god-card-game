import CardHorizontal from "../CardHorizontal/CardHorizontal";
import cards from "../../assets/cards.json";
import styles from "./Board.module.css";

function Board() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.opponentSide}>
        <div className={styles.opponentLeft}>opponent left</div>
        <div className={styles.opponentField}>
          <div className={styles.backline}></div>
          <div className={styles.frontline}>
            <CardHorizontal cardData={cards[0]} />
            <CardHorizontal cardData={cards[1]} />
          </div>
        </div>
        <div className={styles.opponentRight}>opponent right</div>
      </div>
      <div className={styles.horizontalDash}></div>
      <div className={styles.playerSide}>
        <div className={styles.playerLeft}>player left</div>
        <div className={styles.playerField}>
          <div className={styles.frontline}>
            <CardHorizontal cardData={cards[0]} />
            <CardHorizontal cardData={cards[1]} />
          </div>
          <div className={styles.backline}></div>
        </div>
        <div className={styles.playerRight}>player right</div>
      </div>
    </div>
  );
}

export default Board;
