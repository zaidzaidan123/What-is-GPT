import React from "react";
import Styles from "./style.module.css";
import Article from "../../components/article/Article";
import blog1 from "../../assets/Rectangle 22-4.png";
import blog2 from "../../assets/Rectangle 22.png";
import blog3 from "../../assets/Rectangle 22-1.png";
import blog4 from "../../assets/Rectangle 22-2.png";
import blog5 from "../../assets/Rectangle 22-3.png";

const Blog = () => {
  const featuresData = [
    {
      image: blog2,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
      button: "Read Full Article",
    },
    {
      image: blog3,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
      button: "Read Full Article",
    },
    {
      image: blog4,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
      button: "Read Full Article",
    },
    {
      image: blog5,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
      button: "Read Full Article",
    },
  ];
  return (
    <div className={Styles.gpt_blog + " " + Styles.section_padding}>
      <div className={Styles.gpt_blog_header}>
        <h1>A lot is happening, We are blogging about it.</h1>{" "}
      </div>
      <div className={Styles.gpt_blog_container}>
        <div className={Styles.gpt_blog_groupA}>
          <Article
            image={blog1}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us explore how it is?"
            button="Read Full Article"
          />
        </div>
        <div className={Styles.gpt_blog_groupB}>
          {featuresData.map((item, index) => {
            return (
              <Article
                image={item.image}
                date={item.date}
                title={item.title}
                button={item.button}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
