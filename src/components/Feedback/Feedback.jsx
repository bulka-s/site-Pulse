import { useState, useEffect } from "react";
import "./Feedback.scss";

const feedbackData = [
  {
    id: 1,
    name: "Анна Петрова",
    company: "TechCorp",
    text: "Отличная работа! Проект был завершен вовремя и превзошел все ожидания.",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    id: 2,
    name: "Дмитрий Иванов",
    company: "StartUp Inc",
    text: "Профессиональный подход и креативные решения. Рекомендую!",
    rating: 5,
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    id: 3,
    name: "Елена Смирнова",
    company: "Global Business",
    text: "Результат превзошел ожидания. Будем сотрудничать снова.",
    rating: 4,
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

function Feedback() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animStage, setAnimStage] = useState(""); // "out" | "in" | ""
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleChange = (index, dir = "next") => {
    if (index === currentSlide) return;
    setDirection(dir);
    // outgoing animation
    setAnimStage("out");

    // after outgoing, swap content and play incoming
    setTimeout(() => {
      setCurrentSlide(index);
      setAnimStage("in");

      // clear stage after incoming animation
      setTimeout(() => setAnimStage(""), 380);
    }, 320);
  };

  const handlePrev = () => {
    const index =
      (currentSlide - 1 + feedbackData.length) % feedbackData.length;
    handleChange(index, "prev");
  };

  const handleNext = () => {
    const index = (currentSlide + 1) % feedbackData.length;
    handleChange(index, "next");
  };

  const currentFeedback = feedbackData[currentSlide];

  return (
    <div className="feedback">
      <h2>Отзывы клиентов</h2>
      <p className="p2">Реальные истории трансформации и успеха</p>

      <div className="feedback-slider">
        <div className="feedback-card">
          <div
            className={`feedback-content ${
              animStage ? animStage : ""
            } ${direction}`}
          >
            <div className="quote">“</div>

            <div className="feedback-rating">
              {"★".repeat(currentFeedback.rating)}
            </div>

            <div className="feedback-text">«{currentFeedback.text}»</div>

            <div className="feedback-author">
              <img
                className="avatar"
                src={currentFeedback.avatar}
                alt={currentFeedback.name}
              />
              <strong>{currentFeedback.name}</strong>
              <span>{currentFeedback.company}</span>
            </div>
          </div>

          <div className="card-controls">
            <button
              className="slider-btn prev"
              aria-label="Previous"
              onClick={handlePrev}
            >
              ‹
            </button>

            <div className="indicator">
              {currentSlide + 1} / {feedbackData.length}
            </div>

            <button
              className="slider-btn next"
              aria-label="Next"
              onClick={handleNext}
            >
              ›
            </button>
          </div>

          <div className="slider-dots">
            {feedbackData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() =>
                  handleChange(index, index > currentSlide ? "next" : "prev")
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
