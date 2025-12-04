import "./styles/Steps.scss";

interface StepCardProps {
    title: string;
    description: string;
    icon: string;
    id: number;
    color: string;
}

function StepCard({ title, description, icon, id, color }: StepCardProps) {
    return (
        <div className="step-card">
            <div id={(id == 2) ? "process" : ""} className={`step-icon step-icon-${color}`}>
                <img src={icon} alt={`Step ${id} icon`} />
                <span className="p4">0{id}</span>
            </div>
            <div className="step-description" style={{ gridRow: id }}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default StepCard;