import React from "react";
import Styles from "./style.module.css";
const Article = ({image,date,title,button}) => {
  return (
    <div className={Styles.gpt_container}>
      <div className={Styles.gpt_container_image}>
        <img alt="blog" src={image}/>
      </div>
      <div className={Styles.gpt_container_content}>
        <div>
        <p>{date}</p>
        <h3>{title}</h3>
        </div>
        <p>{button}</p>
      </div>
    </div>
  );
};

export default Article;
