import React from "react";
import style from "./aiPrice.module.css";
export default function AIPrice() {
  return (
    <main className={style.main}>
      <img
        src={process.env.PUBLIC_URL + "/img/home_bg.png"}
        className={style.background}
        alt="home background"
      />
      <section className={style.section}>
        <article>
          <img
            src={process.env.PUBLIC_URL + "/img/taichi.png"}
            alt="taichiimage"
          />
          <h1>leon Zhang</h1>
          <p>I am UX engineer who loves to Transform the Ideas Into Reality</p>
          <button>View My Work</button>
        </article>
      </section>
    </main>
  );
}
