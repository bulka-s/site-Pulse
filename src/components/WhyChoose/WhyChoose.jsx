import "./WhyChoose.scss";
import WhyChooseCard from "./WhyChooseCard";
import { statsData } from "../../data/why_choose";

function WhyChoose() {
  return (
    <div className="why-choose">
      <div className="why-choose-container">
        <h2>ПОЧЕМУ ВЫБИРАЮТ ИМЕННО НАС</h2>
        <div className="why-choose-grid">
          {statsData.map((stat) => (
            <WhyChooseCard
              title={stat.title}
              description={stat.description}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
      <div className="why-bottom">
        <h3>Готовы вывести ваш бренд на новый уровень?</h3>
        <p>
          Присоединяйтесь к компаниям, которые уже трансформировали свои
          результаты с Pulse
        </p>
      </div>
    </div>
  );
}

export default WhyChoose;
