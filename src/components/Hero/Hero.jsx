import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'
import Typewriter from "typewriter-effect";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Hero = () => {
  return<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hey there ! My Name Is Aman pandya</h1>
       {/* <p className={styles.discription}> I have a very well knowlege html css javascript boostrap .. and React. In the dynamic field of web development, my proficiency spans HTML, CSS, and JavaScript, forming the bedrock for crafting visually appealing and responsive websites. I've well knowlege frameworks like Bootstrap and Tailwind CSS, ensuring seamless UIs. Proficient in jQuery, AJAX, and JSON, I create dynamic, real-time user experiences.

. </p> */}
<div className={styles.type}>
<Typewriter
   onInit={(typewriter) => {
    typewriter
      .typeString("I have 1.5 years of experience as a Full Stack Developer")
      .pauseFor(2000)
      .deleteAll()
      .typeString("I am a final year graduate BTECH CSE")
      .pauseFor(1500)
      .deleteAll()
      .typeString("I am a Web Developer")
      .pauseFor(1500)
      .deleteAll()
      .typeString("I am a UI Developer")
      .pauseFor(1500)
      .deleteAll()
      .start();
  }}
  options={{
    loop: true, // Enable the loop
  }}
/>
    {/* <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("I am final year graduated student ")
         .pauseFor(1000)
         .deleteAll()
         .typeString("and I am a")
         .deleteAll()
         .typeString("web developer")
         .deleteAll()
         .typeString("UI developer")
         .deleteAll()
       
         .start();
         
 }}
/> */}
</div>
{/* <a href="aman_Resume.pdf" download="aman_Resume.pdf" className={styles.contactBtn}>
  RESUME
</a> */}

{/* <button className={styles.contactBtn} onClick={() => window.location.href="aman_Resume.pdf"} download="aman_Resume.pdf">
  RESUME
</button> */}








    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt='hero image of me ' className={styles.heroImg} />
    <div className={styles.topblur}/>
    <div className={styles.bottomblur}/>
  </section>
}
