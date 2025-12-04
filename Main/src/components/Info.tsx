import "./styles/Info.scss";
import InfoBlock from "./InfoBlock";

interface InfoItem {
    icon: string;
    title: string;
    description: string;
}

function Info() {
    const infoData: InfoItem[] = [
        {
            icon: "/info/shield.svg",
            title: "Доверик",
            description:
                "На этом принципе построены все наши действия. Наша цель — укреплять доверие ежедневно через честную и качественную работу.",
        },
        {
            icon: "/info/award.svg",
            title: "Надежность",
            description:
                "Надёжность достигается благодаря высокому уровню исполнения и одинаковому вниманию ко всем нашим клиентам.",
        },
        {
            icon: "/info/scale.svg",
            title: "Этика",
            description:
                "Основополагающий принцип, основанный на наших ценностях. Определяет правила обработки информации и взаимодействия с клиентами.",
        },
    ];

    return (
        <section className="info">
            <div className="info-container">
                {infoData.map((item, index) => (
                    <InfoBlock
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Info;