import "./Header.scss";
import { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {" "}
      <div className="header-container">
        <img src="/logo.svg" alt="" />
        <ul>
          <li>
            <a href="#main" onClick={(e) => handleNavClick(e, "main")}>
              Главная
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              О нас
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
              Услуги
            </a>
          </li>
          <li>
            <a href="#portfolio">Портфолио</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">Команда</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
