import "./Info.scss";

function InfoBlock({ icon, title, description }) {
  return (
    <div className="info-block">
      <img src={icon} alt="" />
      <h4 className="info-block-title">{title}</h4>
      <p className="info-block-description">{description}</p>
    </div>
  );
}

export default InfoBlock;
