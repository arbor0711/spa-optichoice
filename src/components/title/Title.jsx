import "./Title.css";
const Title = ({ title, subTitle }) => {
  return (
    <div className="title-category">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
