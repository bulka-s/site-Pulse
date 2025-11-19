import "./WhyChoose.scss";

function WhyChooseCard({ title, description, value, label, icon }) {
  return (
    <div className="why-choose-card">
      <div className="why-choose-card-icon">{icon}</div>
      <h3 className="why-choose-card-title">{title}</h3>
      <p className="why-choose-card-description">{description}</p>
      <div className="why-choose-card-stats">
        <span className="why-choose-card-value">{value}</span>
        <span className="why-choose-card-label">{label}</span>
      </div>
    </div>
  );
}
export default WhyChooseCard;
