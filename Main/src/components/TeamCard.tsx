import "./styles/Team.scss";

interface TeamCardProps {
    name: string;
    position: string;
    description: string;
    img: string;
}

function TeamCard({ name, position, description, img }: TeamCardProps) {
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