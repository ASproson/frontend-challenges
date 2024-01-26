import "./TravelCards.css";

const cardBackground =
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const TravelCards = () => {
  return (
    <div className="Travel-card-container">
      <ul className="carousel">
        <li className="card">
          <img
            className="card-background"
            src={cardBackground}
            alt="women wandering the streets travelling"
          />
        </li>
        <li className="card">
          <img
            className="card-background"
            src={cardBackground}
            alt="women wandering the streets travelling"
          />
        </li>
        <li className="card">
          <img
            className="card-background"
            src={cardBackground}
            alt="women wandering the streets travelling"
          />
        </li>
      </ul>
    </div>
  );
};
