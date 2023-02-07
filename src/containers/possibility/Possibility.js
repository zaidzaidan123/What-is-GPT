import React from "react";
import Styles from "./style.module.css";
import image from "../../assets/Feature Image.png";
const Possiblity = () => {
  return (
    <div className={Styles.gpt_Possibility + " " + Styles.section_padding}>
      <div className={Styles.gpt_Possibility_image}>
        <img src={image} alt="Possibility" />
      </div>
      <div className={Styles.gpt_Possibility_content}>
        <h4 className={Styles.firstH4}>Request Early Access to Get Started</h4>
        <h1>The possibilities are beyond your imagination</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4 className={Styles.secondH4}>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possiblity;
