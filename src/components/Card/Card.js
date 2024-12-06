import styles from "./Card.module.css";

function Card({ cardData, direction, position = "no position provided" }) {
  if (!cardData) {
    const cardClass = `${styles.card} ${styles.empty}`;
    return <div className={cardClass}>{position}</div>;
  }

  if (direction === "horizontal") {
    const cardStyle = {
      backgroundImage: `url("/assets/images/cards/${cardData.id}/horizontal.png")`,
      boxShadow: `0 0 0 3px var(--${cardData.rarity}-card-frame), 0 0 0 4px black`,
    };

    const positionCode = cardData.positions[0].trim().toLowerCase().replace(/ /g, "_"); // TODO: this should be given by a prop
    const positionStyle = {
      backgroundImage: `url("/assets/images/icons/positions/${positionCode}.png")`,
    };

    const hitPointsStyle = {
      backgroundImage: `url("/assets/images/icons/heart.png")`,
    };

    const cardClass = `${styles.card} ${styles.horizontal} ${Math.random() < 0.5 ? styles.disabled : ""}`;

    return (
      <div className={cardClass} style={cardStyle}>
        <div style={positionStyle}></div>
        <div style={hitPointsStyle}>{cardData.hitPoints}</div>
        {/* <div style={actionStyle}></div> */}
      </div>
    );
  }
}

export default Card;
