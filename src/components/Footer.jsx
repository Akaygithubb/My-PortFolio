import React from 'react'
import founder from "../assets/founder.jpeg"
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={founder} alt="Founder" />
        

        <h2>Aikakshwer Vivek</h2>

        <p>You can be the tastiest orange in the Garden ,Yet there are some people who don't like oranges.</p>
        </div>
        <aside>
            <h2>
               Social Media
            </h2>
            <article>
                <a href="https://www.youtube.com/@pediagamer9685" target={"blank"}><AiFillYoutube/></a>
                <a href="https://www.instagram.com/_.akayyyy._" target={"blank"}><AiFillInstagram/></a>
                <a href="https://www.github.com/Akaygithubb" target={"blank"}><AiFillGithub/></a>
            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer