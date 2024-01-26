import "./TravelCards.css";

const cardBackground =
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const profileBackground =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
          <div className="user-profile">
            <img
              className="user-profile-picture"
              src={profileBackground}
              alt="profile"
            />
          </div>
          <div className="card-container">
            <h2 className="card-title">Do you want to go somewhere?</h2>
          </div>
          <div className="button-container">
            <button>Get started</button>
          </div>
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
