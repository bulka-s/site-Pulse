import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-black"></div>
      <div className="hero-content">
        <h1>
          Мы сосредоточены на
          <br />
          профессионализме и<br />
          компетентности!
        </h1>
        <p className="p1">
          <b>Pulse Marketing </b>предлагает клиенту индивидуальный и<br />
          специализированный подход для каждого сегмента бизнеса,
          <br />
          основанный на трёх ключевых принципах: доверие,
          <br />
          надежность и этика.
        </p>
        <button className="hero-button p1">Связяться с нами</button>
      </div>
    </section>
  );
}

export default Hero;
