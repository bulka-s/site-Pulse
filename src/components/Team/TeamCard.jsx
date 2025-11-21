import "./Team.scss";

function TeamCard({ name, position, description, img }) {
  return (
    <div className="team-card">
      <img src={img} alt={name} />
      <div className="team-text">
        <h3 style={{ lineHeight: 1 }}>{name}</h3>
        <p className="p3">{position}</p>
        <p className="p4">{description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
