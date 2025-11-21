import "./WhyChoose.scss";

function WhyChooseCard({ title, description, value, label, icon }) {
  return (
    <div className="why-choose-card">
      <div className="why-choose-title-block">
        <div className="why-choose-card-icon">
          <img src={icon} alt="" />
        </div>
        <p style={{ fontSize: 20 }} className="why-choose-card-title">
          {title}
        </p>
      </div>
      <p className="why-choose-card-description p3">{description}</p>
      <div className="why-choose-card-stats">
        <span className="why-choose-card-value p30">{value}</span>
        <span className="why-choose-card-label p4">{label}</span>
      </div>
    </div>
  );
}
export default WhyChooseCard;
