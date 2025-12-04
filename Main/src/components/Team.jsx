import "./Team.scss";
import { teamData } from "../../data/team";
import TeamCard from "./TeamCard"; // правильный импорт

function Team() {
  return (
    <div className="team" id="team">
      <h2 style={{ lineHeight: 1 }}>Наша команда</h2>
      <div className="team-grid">
        {teamData.map((item) => (
          <TeamCard
            key={item.id}
            name={item.name}
            position={item.position}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
