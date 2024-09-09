import { HashLink } from "react-router-hash-link";
import kadhiChawal from "./assets/kadhi-chawal.jpg";
import bhog56 from "./assets/bhog-56.jpg";
import southyDish from "./assets/southy-dish.jpg";
import "./WeekSpecials.css";
import MealCard from "./MealCard";

const meals = [
  {
    name: "56 bhog ",
    image: bhog56,
    price: "3500rs",
    description: `The famous 56 bhog,full of sweets and sour taste leaving a taste of blossom spark in your mouth.`,
  },
  {
    name: "Kadhi Chawal",
    image: kadhiChawal,
    price: "1000rs",
    description: `Our kadhio chawal is made from rice and besan that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Southy dish ",
    image: southyDish,
    price: "750rs",
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials" id="menu">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <HashLink className="button-primary" to="/#menu">
          Online Menu
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
