import "./Style.css";
import Title from "../Title/Title";
import style from "../../assets/images/style.jpg";

const Style = () => {
  return (
    <div className="container">
      <div className="divider div-transparent div-dot"></div>
      <div className="style ">
        <div className="style-left">
          <img
            src={style}
            alt="A woman with a stylish glasses who looking smart"
          />
        </div>
        <div className="style-right">
          <Title
            title="Elevate Your Style"
            subTitle="Transform Your Look with Fashionable Frames"
          />
          <p>
            Glasses are more than just a vision correction tool; they have
            become a fashion statement, enhancing style and transforming
            one&apos;s appearance. The right pair of glasses can instantly
            elevate your look, adding a touch of sophistication, trendiness, or
            even quirkiness. Whether you opt for sleek and minimalist frames
            that exude modern elegance or bold and colorful designs that make a
            fashion-forward statement, glasses can become a defining accessory.
            They frame your face, accentuate your features, and provide an
            opportunity for self-expression. With countless styles to choose
            from, finding the perfect pair allows you to showcase your
            personality, elevate your style, and make a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Style;
