import React, { useState } from "react";
import Styles from "./style.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  let links = ["Home", "What is GPT?", "Open AI", "Case Studies", "Library"];
  return (
    <div className={Styles.gpt_navBar}>
      <div className={Styles.gpt_navBar_links}>
        <div className={Styles.gpt_navBar_links_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={Styles.gpt_navBar_links_container}>
          {links.map((item) => {
            return (
              <p>
                <a href={"#"+item}>{item}</a>
              </p>
            );
          })}
        </div>
      </div>
      <div className={Styles.gpt_navBar_sign}>
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className={Styles.gpt_navBar_Menu}>
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className={Styles.gpt_navBar_Menu_container}>
            <div className={Styles.gpt_navBar_Menu_container_links}>
              {links.map((item) => {
                return (
                  <p>
                    <a href={item}>{item}</a>
                  </p>
                );
              })}
              <div className={Styles.gpt_navBar_sign_menu}>
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
