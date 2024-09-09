import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Shiffu",
    image:
      "https://avatar.iran.liara.run/public/68",
    rating: [1, 1, 1, 1, 0.5],
    says: "Absolute delight to eat ,must try dishes by chef sky "
  },
  {
    fullName: "Suyash",
    image:
      "https://avatar.iran.liara.run/public/31",
    rating: [1, 1, 1, 1, 0],
    says: "Ek dum kadak,aur swadisth",
  },
  {
    fullName: "Om",
    image:
      "https://avatar.iran.liara.run/public/34",
    rating: [1, 1, 1, 1, 0.5],
    says: "Shanndar aur mast ,try butter chicken once!",
  },
  {
    fullName: "Nikhil",
    image:
      "https://avatar.iran.liara.run/public/8",
    rating: [1, 1, 1, 1, 1],
    says: "One is never enough!,best dishes i have tried ever ",
  },
  {
    fullName: "Shubhang",
    image:
      "https://avatar.iran.liara.run/public/18",
    rating: [1, 1, 1, 1, 1],
    says: "try south indian  dishes they are awesome ",
  },
  {
    fullName: "Kush",
    image:
      "https://avatar.iran.liara.run/public/13",
    rating: [1, 1, 1, 1, .5],
    says: "try chowmien they are best in country",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
