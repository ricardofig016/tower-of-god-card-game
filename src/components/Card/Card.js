import styles from "./Card.module.css";

function Card({ cardData, direction, position = "no position provided" }) {
  if (!cardData) {
    return null;
  }

  if (direction === "horizontal") {
    const cardStyle = {
      backgroundImage: `url("/assets/images/cards/${cardData.id}/horizontal.png")`,
      boxShadow: `0 0 0 3px var(--${cardData.rarity}-card-frame), 0 0 0 4px black`,
    };

    const positionCode = cardData.positions[0].trim().toLowerCase().replace(/ /g, "_");
    const positionStyle = {
      backgroundImage: `url("/assets/images/icons/positions/${positionCode}.png")`,
    };

    const hitPointsStyle = {
      backgroundImage: `url("/assets/images/icons/heart.png")`,
    };

    const actionStyle = {
      backgroundImage: `url("/assets/images/icons/action/${Math.random() < 0.5 ? "white" : "gray"}.png")`,
    };

    return (
      <div className={styles.horizontal} style={cardStyle}>
        <div style={positionStyle}></div>
        <div className={styles.hitPoints} style={hitPointsStyle}>
          {cardData.hitPoints}
        </div>
        <div style={actionStyle}></div>
      </div>
    );
  }
}

export default Card;
