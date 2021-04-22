/** @format */
import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/dpak.jpg"
          alt="Deepak"
          width={300}
          height={300}
        />
      </div>
      <h2>Hey there, I am Deepak👋👋</h2>
      <p>I blog about JS, React and Web development in general...</p>
    </section>
  );
}

export default Hero;
