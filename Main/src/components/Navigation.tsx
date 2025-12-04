import { Activity, Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    onContactClick();
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Activity className="w-10 h-10 text-[#1167B1]" />
            <div className="flex flex-col">
              <span className="text-2xl text-[#1B1B1B]">Pulse</span>
              <span className="text-xs text-gray-600 -mt-1">MARKETING</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-[#1167B1] transition-colors relative group"
            >
              ГЛАВНАЯ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1167B1] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-[#1167B1] transition-colors relative group"
            >
              О НАС
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1167B1] transition-all group-hover:w-full"></span>
            </button>
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-[#1167B1] transition-colors relative group"
            >
              КАТАЛОГ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1167B1] transition-all group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-[#1167B1] transition-colors relative group"
            >
              ПОРТФОЛИО
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1167B1] transition-all group-hover:w-full"></span>
            </button>
            <button
              onClick={handleContactClick}
              className="text-gray-700 hover:text-[#1167B1] transition-colors relative group"
            >
              КОНТАКТЫ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1167B1] transition-all group-hover:w-full"></span>
            </button>
            
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-[#1167B1] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1167B1] text-white text-xs rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            <Button
              onClick={handleContactClick}
              className="bg-[#2C3E50] hover:bg-[#1167B1] text-white px-6"
            >
              СВЯЗАТЬСЯ С НАМИ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-[#1167B1] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#1167B1] text-white text-xs rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="p-2 text-gray-700 hover:text-[#1167B1] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#1167B1] transition-colors"
              >
                ГЛАВНАЯ
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#1167B1] transition-colors"
              >
                О НАС
              </button>
              <Link
                to="/catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#1167B1] transition-colors"
              >
                КАТАЛОГ
              </Link>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#1167B1] transition-colors"
              >
                ПОРТФОЛИО
              </button>
              <button
                onClick={handleContactClick}
                className="block w-full text-left py-2 text-gray-700 hover:text-[#1167B1] transition-colors"
              >
                КОНТАКТЫ
              </button>
              <Button
                onClick={handleContactClick}
                className="w-full bg-[#2C3E50] hover:bg-[#1167B1] text-white"
              >
                СВЯЗАТЬСЯ С НАМИ
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}