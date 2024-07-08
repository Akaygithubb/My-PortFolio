import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    two: {
      y: "-100%",
      opacity: 0,
    },
    three: {
      y: "-100%",
      opacity: 0,
    },
    fourth: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>

      <section>
        <motion.div
          className="servicebox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>5+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="servicebox2"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="servicebox3"
          whileInView={animations.whileInView}
          initial={animations.three}
          transition={{
            delay:0.3,
          }}
        >
          <AiFillAndroid />
          <span>App Development</span>
        </motion.div>
        <motion.div
          className="servicebox4"
          whileInView={animations.whileInView}
          initial={animations.fourth}
        >
          <AiFillWindows />
          <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
