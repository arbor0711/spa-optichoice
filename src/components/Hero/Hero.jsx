import "./Hero.css";
import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">Discover a New Vision</h1>
        <p className="hero-subtitle">
          Extensive selection of fashionable glasses, enhance both your vision
          and personal style.
        </p>
        <button className="btn">
          Shop Now <AiOutlineRight size={16} className="icon" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
