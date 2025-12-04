import "./Header.scss";
import { useState, useEffect } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useSmoothScroll();
  const [navOpen, setNavOpen] = useState(false);

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
    setNavOpen(false);
  };
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <img src="/logo.svg" alt="" />

        <button
          className={`nav-toggle ${navOpen ? "open" : ""}`}
          aria-label={navOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={navOpen}
          onClick={() => setNavOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav ${navOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#main" onClick={(e) => handleNavClick(e, "main")}>Главная</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>О нас</a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Услуги</a>
            </li>
            <li>
              <a href="#process" onClick={(e) => handleNavClick(e, "process")}>Процесс</a>
            </li>
            <li>
              <a href="#why" onClick={(e) => handleNavClick(e, "why")}>Преимущества</a>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleNavClick(e, "team")}>Команда</a>
            </li>
            <li>
              <a href="#feedback" onClick={(e) => handleNavClick(e, "feedback")}>Отзывы</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
