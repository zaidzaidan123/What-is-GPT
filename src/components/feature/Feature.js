import React from "react";
import Styles from "./style.module.css";

const Feature = ({title ,text,class1}) => {
  return (
    <div className={class1 ? Styles.gpt_feature_containerr : Styles.gpt_feature_container}>
      <div className={Styles.gpt_feature_title}>
        <div />
        <h1>{title}</h1>
        </div>
        <div className={ class1 ? Styles.gpt_feature_textt: Styles.gpt_feature_text}>
          <p>{text}</p>
        </div>
    </div>
  );
};

export default Feature;
