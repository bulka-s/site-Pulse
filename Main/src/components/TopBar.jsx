import "./TopBar.scss";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-bar-item">
          <img src="/phone.svg" alt="" />
          <span className="p4">+7 (999) 123-45-67</span>
        </div>
        <div className="top-bar-item">
          <img src="/mail.svg" alt="" />
          <span className="p4">info@pulsemarketing.ru</span>
        </div>
      </div>
    </div>
  );
}
