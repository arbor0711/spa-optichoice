import "./Category.css";
import men from "../../assets/images/category-men.jpg";
import women from "../../assets/images/category-women.jpg";
import contactLens from "../../assets/images/category-contact-lenses.jpg";

const ShoppingCategory = () => {
  const categories = [
    {
      category: "MEN",
      srcImg: men,
      alt: "An image of a man with prescription glasses",
    },
    {
      category: "WOMEN",
      srcImg: women,
      alt: "An image of a women with prescription glasses",
    },
    {
      category: "CONTACT LENS",
      srcImg: contactLens,
      alt: "Image of eye contact lens",
    },
  ];
  console.log(men);
  return (
    <section className=" container">
      <div className="programs">
        {categories.map((item) => {
          console.log(men);
          return (
            <div className="program" key={item.category}>
              <img src={item.srcImg} alt={item.alt} />
              <h2>{item.category}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShoppingCategory;
