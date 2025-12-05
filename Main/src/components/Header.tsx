import "./styles/Header.scss";
import { useState, useEffect } from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const scrollToSection = useSmoothScroll();
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
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
              <a href="#main" onClick={(e) => handleNavClick(e, "main")}>
                <Link to="/">Главная</Link>
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                <Link to="/">О нас</Link>
              </a>
            </li>
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-[#1167B1] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1167B1] text-white text-xs rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            {/* <li>
                            <a href="#process" onClick={(e) => handleNavClick(e, "process")}>
                                Процесс
                            </a>
                        </li>
                        <li>
                            <a href="#why" onClick={(e) => handleNavClick(e, "why")}>
                                Преимущества
                            </a>
                        </li>
                        <li>
                            <a href="#team" onClick={(e) => handleNavClick(e, "team")}>
                                Команда
                            </a>
                        </li>
                        <li>
                            <a
                                href="#feedback"
                                onClick={(e) => handleNavClick(e, "feedback")}
                            >
                                Отзывы
                            </a>
                        </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
