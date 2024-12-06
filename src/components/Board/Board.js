import Card from "../Card/Card";
import cards from "../../assets/cards.json";
import styles from "./Board.module.css";

function Board() {
  const cardsData = cards.map((card) => ({
    isEmpty: false,
    id: card.id,
    rarity: card.rarity,
    position: card.positions[0], // TODO: player should be able to choose which position
    hitPoints: card.hitPoints,
    display: "board",
    isDisabled: Math.random() < 0.5,
  }));

  return (
    <div className={styles.mainDiv}>
      <div className={styles.opponentSide}>
        <div className={styles.opponentLeft}>opponent left</div>
        <div className={styles.opponentField}>
          <div className={styles.backline}>
            <Card {...cardsData[0]} />
            <Card {...cardsData[2]} />
            <Card {...cardsData[3]} />
            <Card {...cardsData[4]} />
            <Card {...cardsData[0]} isEmpty={true} />
            <Card position="Fisherman" />
          </div>
          <div className={styles.frontline}>
            <Card {...cardsData[1]} />
            <Card {...cardsData[0]} />
            <Card {...cardsData[1]} />
            <Card {...cardsData[1]} />
          </div>
        </div>
        <div className={styles.opponentRight}>opponent right</div>
      </div>
      <div className={styles.horizontalDash}></div>
      <div className={styles.playerSide}>
        <div className={styles.playerLeft}>player left</div>
        <div className={styles.playerField}>
          <div className={styles.frontline}>
            <Card {...cardsData[2]} />
            <Card {...cardsData[3]} />
            <Card {...cardsData[4]} />
          </div>
          <div className={styles.backline}>
            <Card {...cardsData[5]} />
            <Card {...cardsData[0]} />
          </div>
        </div>
        <div className={styles.playerRight}>player right</div>
      </div>
    </div>
  );
}

export default Board;
