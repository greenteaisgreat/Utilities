import Accordion from "./components/Accordion/Accordion";
import GenerateColor from "./components/GenerateColor/GenerateColor";
import StarRating from "./components/StarRating/StarRating";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import "./App.css";

export default function App() {
  return (
    <>
      <Accordion />
      <GenerateColor />
      <StarRating />
      <ImageSlider url={"https://picsum.photos/v2/list"} />
    </>
  );
}
