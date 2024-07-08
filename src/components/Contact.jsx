import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const[disableBtn,setdisableBtn]=useState(false);

  const submithandler = async (e) => {
    e.preventDefault();
    setdisableBtn(true)

   try {
    await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      setname("");
      setemail("");
      setmessage("");
      toast.success("Message Sent");
    setdisableBtn(false);
   } catch (error) {
    toast.error("Error")
    console.log(error);
    setdisableBtn(false)
   }
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submithandler} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <motion.button disabled={disableBtn} type="submit" {...animations.button} className={disableBtn?"disableBtn":""}>
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
