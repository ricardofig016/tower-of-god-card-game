import Card from "../Card/Card";
import cards from "../../assets/cards.json";
import styles from "./Board.module.css";

function Board() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.opponentSide}>
        <div className={styles.opponentLeft}>opponent left</div>
        <div className={styles.opponentField}>
          <div className={styles.backline}>
            <Card cardData={cards[0]} direction="horizontal" />
            <Card cardData={cards[0]} direction="horizontal" />
            <Card cardData={cards[0]} direction="horizontal" />
            <Card cardData={cards[0]} direction="horizontal" />
            <Card position="Fisherman" />
          </div>
          <div className={styles.frontline}>
            <Card cardData={cards[1]} direction="horizontal" />
            <Card cardData={cards[0]} direction="horizontal" />
            <Card cardData={cards[1]} direction="horizontal" />
            <Card cardData={cards[1]} direction="horizontal" />
          </div>
        </div>
        <div className={styles.opponentRight}>opponent right</div>
      </div>
      <div className={styles.horizontalDash}></div>
      <div className={styles.playerSide}>
        <div className={styles.playerLeft}>player left</div>
        <div className={styles.playerField}>
          <div className={styles.frontline}>
            <Card cardData={cards[2]} direction="horizontal" />
            <Card cardData={cards[3]} direction="horizontal" />
            <Card cardData={cards[4]} direction="horizontal" />
          </div>
          <div className={styles.backline}>
            <Card cardData={cards[5]} direction="horizontal" />
            <Card cardData={cards[0]} direction="horizontal" />
          </div>
        </div>
        <div className={styles.playerRight}>player right</div>
      </div>
    </div>
  );
}

export default Board;
