import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonials">
      <h2>Testimonials</h2>
      <section>
        <Testimonialcard
          name={"Lana Ray"}
          feedback={
            "Your Designing skills are so good."
          }
        />
        <Testimonialcard
          name={"Cillian"}
          feedback={
            "Wow what a portfolio, doesn't expected by you!"
          }
        />
        <Testimonialcard
          name={"Sabrina "}
          feedback={
            "Amazing seems like you should the Google CEO."
          }
        />
      </section>
    </div>
  );
};
const Testimonialcard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
