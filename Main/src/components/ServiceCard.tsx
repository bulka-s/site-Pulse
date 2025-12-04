import "./styles/Services.scss";

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
}

function ServiceCard({ image, title, description }: ServiceCardProps) {
    return (
        <div className="service-card">
            <img src={image} alt={title} />
            <p className="p1">{title}</p>
            <p className="p4">{description}</p>
        </div>
    );
}

export default ServiceCard;