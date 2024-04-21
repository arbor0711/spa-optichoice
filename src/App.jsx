import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ShoppingCategory from "./components/Category/Category";
import Title from "./components/title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title
        title="Explore Our Optic Collections"
        subTitle="Discover the Perfect Frames for Every Gaze"
      />
      <ShoppingCategory />
    </>
  );
}

export default App;
