// import styles from "./CardHorizontal.module.css";

function CardHorizontal({ cardData }) {
  if (!cardData) {
    return null;
  }
  return (
    <div className="card">
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
      <img src={cardData.image} alt={cardData.title} />
    </div>
  );
}

export default CardHorizontal;
