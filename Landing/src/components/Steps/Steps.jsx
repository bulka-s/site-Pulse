import "./Steps.scss";
import StepCard from "./StepCard";
import { steps } from "../../data/steps";

function Steps() {
  return (
    <div className="steps">
      <div className="steps-container">
        <h2>НАШ ПРОЦЕСС РАБОТЫ</h2>
        <p className="p3">
          Проверенная методология, гарантирующая исключительные результаты
        </p>
        <div className="steps-blocks">
          {steps.map((step) => (
            <StepCard
              title={step.title}
              description={step.description}
              icon={step.icon}
              id={step.id}
              color={step.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Steps;
