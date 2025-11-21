import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="footer-col footer-col--about">
          <div className="logo">
            <div className="logo__mark">Pulse</div>
            <div className="logo__text">Marketing</div>
          </div>
          <p className="footer-desc">
            Мы задаём ритм вашей марке и создаём импульсы роста для вашего бизнеса.
          </p>
        </div>

        <div className="footer-col footer-col--contacts">
          <h4>Контакты</h4>
          <ul className="contacts-list">
            <li>
              <span className="icon">📞</span>
              <a href="tel:+79991234567">+7 (999) 123-45-67</a>
            </li>
            <li>
              <span className="icon">✉️</span>
              <a href="mailto:info@pulsemarketing.ru">info@pulsemarketing.ru</a>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-col--services">
          <h4>Услуги</h4>
          <ul className="services-list">
            <li>Дизайн и брендинг</li>
            <li>SMM и цифровые кампании</li>
            <li>Наружная реклама</li>
            <li>Фото- и видеопроизводство</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__rule" />

      <div className="site-footer__bottom">
        <div>© 2025 Pulse Marketing. Все права защищены.</div>
      </div>
    </footer>
  );
}

export default Footer;
