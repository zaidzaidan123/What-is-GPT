import React from "react";
import Styles from "./style.module.css";
import google from "../../assets/google.png";
import shopify from "../../assets/shopify.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";

const Brand = () => {
  return (
    <div className={Styles.gpt_brand + " " + Styles.section_padding}>
      <div>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify"/>
      </div>
    </div>
  );
};

export default Brand;
