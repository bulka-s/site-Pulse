import { Activity, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-[#1167B1]" />
              <div className="flex flex-col">
                <span className="text-2xl">Pulse</span>
                <span className="text-xs -mt-1">MARKETING</span>
              </div>
            </div>
            <p className="text-gray-300">
              Задаем ритм вашему бренду и создаем импульсы роста для вашего бизнеса
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white transition-colors">
                  Каталог услуг
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
                  Корзина
                </Link>
              </li>
              <li>
                <Link to="/auth" className="text-gray-300 hover:text-white transition-colors">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xl mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1167B1]" />
                <a
                  href="tel:+79991234567"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1167B1]" />
                <a
                  href="mailto:info@pulsemarketing.ru"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@pulsemarketing.ru
                </a>
              </div>
            </div>
          </div>

          {/* Services quick links */}
          <div>
            <h3 className="text-xl mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/design" className="text-gray-300 hover:text-white transition-colors">
                  Дизайн и брендинг
                </Link>
              </li>
              <li>
                <Link to="/catalog/smm" className="text-gray-300 hover:text-white transition-colors">
                  SMM и цифровые кампании
                </Link>
              </li>
              <li>
                <Link to="/catalog/outdoor" className="text-gray-300 hover:text-white transition-colors">
                  Наружная реклама
                </Link>
              </li>
              <li>
                <Link to="/catalog/production" className="text-gray-300 hover:text-white transition-colors">
                  Фото- и видеопроизводство
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
          <p>© 2025 Pulse Marketing. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}