import React from 'react'
import Styles from "./style.module.css"

const Cta = () => {
  return (
    <div className={Styles.gpt_cta}>
      <div className={Styles.gpt_cta_content}>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={Styles.gpt_cta_button}>
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default Cta