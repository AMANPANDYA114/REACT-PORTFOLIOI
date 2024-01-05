
import styles from './form.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Form = () => {


    useEffect(() => {
        AOS.init({
          once: false,
        });
      }, []);
  return (
    <div className={`${styles.formContainer} aos-init`} data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
        <h2 style={{ color: 'white' }}>Contact Us</h2>
      <form action="https://formspree.io/f/mdoqopvz"
  method="POST">
        <div className={styles.inputBx}>
          <input type="text" name="name" placeholder='please enter your  name' required />
        
        </div>
        <div className={styles.inputBx}>
          <input type="email" placeholder='please enter your email address' name="email" required />
        
        </div>
        <div className={styles.inputBx}>
          <textarea name="message" placeholder=' type a  message' required></textarea>
      
        </div>
        <div className={styles.inputBx}>
          <input className={styles.submitButton} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;

