import "./Services.scss";

function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <p className="p1">{title}</p>
      <p className="p4">{description}</p>
    </div>
  );
}

export default ServiceCard;
