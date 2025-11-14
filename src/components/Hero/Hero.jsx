import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-black"></div>
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Your success starts here.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
