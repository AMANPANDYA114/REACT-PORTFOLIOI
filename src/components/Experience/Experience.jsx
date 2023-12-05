import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
// import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
AOS.init();
export const Experience = () => {
  return (
   
//     <section className={styles.container} id="experience">
//     <h2 className={styles.title}>Experience</h2>
//     <div className={styles.content}>
//       <div className={styles.skills}>
//         {skills.map((skill, id) => {
//           return (
//             <div key={id} className={styles.skill}>
//               <div className={styles.skillImageContainer}>
//                 <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//               </div>
//               <p>{skill.title}</p>
//               <h1>hello word </h1>
//             </div>
//           );
//         })}
//       </div>
//       </div>
// </section>
      <div id="skill">
        <h1 className={styles.heading}>SKILLS</h1>
<section className={styles.cards}>
{/* <h1 className={styles.heading}>my skills </h1> */}
<div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/g0ZWkdVx/html.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>HTML</h2>
      
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/RV6GYF4J/css-1.png"alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>CSS</h2>
      
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/d1dvVvKW/js4.jpg" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>JAVASCRIPT</h2>
     
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/SRjYJJD6/bootstrap.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>BOOTSTRAP</h2>
      
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/4d55hdht/tail2.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>TAILWIND CSS</h2>
      
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/fbtBGRxr/jquery-1.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>JQUERY</h2>
     
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/8C4z6Qw9/react.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>REACT</h2>
      
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/T3kdYVPX/node.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>NODEJS</h2>
    
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/tRLV9HMz/mongodb.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>MONGODB</h2>
      
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/TYYB2Z5p/cl.jpg" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>C LANGUAGE</h2>
      
    </div>
  </div>
  <div className={`${styles.card}`} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <img className={styles.card__image} src="https://i.postimg.cc/vB1LKYVZ/c.png" alt="image description" />
    <div className={styles.card__content}>
      <h2 className={styles.card__title}>C++</h2>
      
    </div>
  </div>
</section>

</div>
  );
};
