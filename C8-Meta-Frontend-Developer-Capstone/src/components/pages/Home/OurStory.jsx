import chef1 from "./assets/chef1.jpg";
import chef2 from "./assets/chef2.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>Our Story</h2>
        <p>
        At Little Lemon by skyy4 ,our story begins with a passion for sharing India's rich flavors and traditions. 
        Inspired by childhood memories of family gatherings,
        our chefs craft authentic dishes with modern twists using fresh ingredients and sustainable practices. 
        Our restaurant is a warm and inviting space, designed to make you feel like you're dining with family. 
        We're proud to offer a diverse menu and warm hospitality.Come, taste the flavors of India, and let our story become a part of yours.
        We're honored to be a part of your special moments and everyday meals, serving you with love and care..
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chef1} alt="Chefs #1" />
        <img src={chef2} alt="Chefs #2" />
      </div>
    </section>
  );
};

export default OurStory;
