import "./Info.scss";
import InfoBlock from "../Info/InfoBlock";

function Info() {
  const infoData = [
    {
      icon: "path/to/icon1.png",
      title: "Доверик",
      description:
        "На этом принципе построены все наши действия. Наша цель — укреплять доверие ежедневно через честную и качественную работу.",
    },
    {
      icon: "path/to/icon2.png",
      title: "Надежность",
      description:
        "Надёжность достигается благодаря высокому уровню исполнения и одинаковому вниманию ко всем нашим клиентам.",
    },
    {
      icon: "path/to/icon3.png",
      title: "Этика",
      description:
        "Основополагающий принцип, основанный на наших ценностях. Определяет правила обработки информации и взаимодействия с клиентами.",
    },
  ];

  return (
    <section className="info">
      <div className="info-container">
        <div className="info-block">
          {infoData.map((item, index) => (
            <InfoBlock
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;
