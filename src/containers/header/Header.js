import React from "react";
import Styles from "./style.module.css";
import people from "../../assets/Group 81.png";
import ai from "../../assets/Illustration.png";
const Header = () => {
  return (
    <div className={Styles.gpt_header}>
      <div className={Styles.gpt_header_content}>
        <h1 className={Styles.gradient_text}>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className={Styles.gpt_header_paragraph}>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={Styles.gpt_header_input}>
          <input type="email" placeholder="Type your Email " />
          <button type="button">Get Started</button>
        </div>
        <div className={Styles.gpt_header_people}>
          <img alt="people" src={people} />
          <p> 1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={Styles.gpt_header_pic}>
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
