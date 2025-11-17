import "./Services.scss";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../../data/services";

function Services() {
  return (
    <div className="services">
      <div className="services-container">
        <h2>Услуги</h2>
        <p className="p3">Познакомьтесь с нашим портфолио услуг</p>
        <div className="services-cards">
          {servicesData.map((item, index) => (
            <ServiceCard
              key={index}
              image={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
