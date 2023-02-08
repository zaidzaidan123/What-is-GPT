import React from "react";
import Styles from "./style.module.css";
import Feature from "../../components/feature/Feature";
const WhatGpt3 = () => {
  const featuresData = [
    {
      title: "Chatbots",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];
  return (
    <div
      className={Styles.gpt_what + " " + Styles.section_margin}
      id="What is GPT?"
    >
      <div className={Styles.gpt_what_feature} id={Styles.gpt_what_feature}>
        <Feature
          title="What is GPT3"
          text=" We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by"
          class1={1}
        />
      </div>
      <div className={Styles.gpt_what_heading}>
        <h1 className={Styles.gpt_heading}>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className={Styles.gpt_what_container}>
        <div className={Styles.gpt_what_feature1}></div>
        {featuresData.map((item, index) => {
          return <Feature title={item.title} text={item.text} key={index} />;
        })}
      </div>
    </div>
  );
};

export default WhatGpt3;
