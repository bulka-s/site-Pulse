import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/logo.svg" alt="" />
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Портфолио</a>
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
