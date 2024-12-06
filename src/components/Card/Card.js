import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card({ isEmpty = false, id, rarity, position, hitPoints, display, isDisabled }) {
  if (isEmpty) {
    const cardClass = `${styles.card} ${styles.empty}`;
    return <div className={cardClass}>{position}</div>;
  }

  if (display === "board") {
    const cardStyle = {
      backgroundImage: `url("/assets/images/cards/${id}/horizontal.png")`,
      boxShadow: `0 0 0 3px var(--${rarity}-card-frame), 0 0 0 4px black`,
    };

    const positionCode = position.toLowerCase().replace(/ /g, "_");
    const positionStyle = {
      backgroundImage: `url("/assets/images/icons/positions/${positionCode}.png")`,
    };

    const hitPointsStyle = {
      backgroundImage: `url("/assets/images/icons/heart.png")`,
    };

    const cardClass = `${styles.card} ${styles.onBoard} ${isDisabled ? styles.disabled : ""}`;

    return (
      <div className={cardClass} style={cardStyle}>
        <div style={positionStyle}></div>
        <div style={hitPointsStyle}>{hitPoints}</div>
      </div>
    );
  }
}

Card.propTypes = {
  isEmpty: PropTypes.bool,
  id: PropTypes.string,
  rarity: PropTypes.string,
  position: PropTypes.string,
  hitPoints: PropTypes.number,
  display: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Card;
