import React from "react";
import Styles from "./style.module.css";
import logo from "../../assets/GPT-3.svg";

const Footer = () => {
  return (
    <div className={Styles.gpt_footer + " " + Styles.section_padding}>
      <div className={Styles.gpt_footer_header}>
        <h1>Do you want to step in to the future before others</h1>
      </div>
      <div className={Styles.gpt_footer_btn}>
        <p>Request Early Access</p>
      </div>

      <div className={Styles.gpt_footer_links}>
        <div className={Styles.gpt_footer_links_logo}>
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className={Styles.gpt_footer_links_div}>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className={Styles.gpt_footer_links_div}>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className={Styles.gpt_footer_links_div}>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className={Styles.gpt_footer_copy}>
        <p>© 2021 GPT-3. All rights reserved.</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
