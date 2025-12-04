import "./styles/Info.scss";

interface InfoBlockProps {
    icon: string;
    title: string;
    description: string;
}

function InfoBlock({ icon, title, description }: InfoBlockProps) {
    return (
        <div className="info-block">
            <img src={icon} alt="" />
            <h4 className="info-block-title">{title}</h4>
            <p className="info-block-description p4">{description}</p>
        </div>
    );
}

export default InfoBlock;