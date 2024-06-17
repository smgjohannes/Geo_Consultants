import React, { useEffect } from 'react';
import './contactStyles.css';
import { focusFunc, blurFunc } from './contactUs';
function ContactView() {
  useEffect(() => {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);

      return () => {
        input.removeEventListener('focus', focusFunc);
        input.removeEventListener('blur', blurFunc);
      };
    });
  }, []);
  return (
    <>
      <div class='container'>
        <span class='big-circle'></span>
        <img src='img/shape.png' class='square' alt='' />
        <div class='form'>
          <div class='contact-info'>
            <h3 class='title'>Let's get in touch</h3>
            <p class='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div class='info'>
              {/* <div class='information'>
                <i class='fas fa-map-marker-alt'></i> &nbsp &nbsp
                <p>92 Cherry Drive Uniondale, NY 11553</p>
              </div> */}
              <div class='information'>
                <i class='fas fa-envelope'></i>
                <p>katanga.b.k@gmail.com</p>
              </div>
              <div class='information'>
                <i class='fas fa-phone'></i>
                <p>+246-81-7656065</p>
              </div>
            </div>

            <div class='social-media'>
              <p>Connect with us :</p>
              <div class='social-icons'>
                <a href='#'>
                  <i class='fab fa-facebook-f'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-twitter'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-instagram'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>

          <div class='contact-form'>
            <span class='circle one'></span>
            <span class='circle two'></span>

            <form action='index.html' autocomplete='off'>
              <h3 class='title'>Contact us</h3>
              <div class='input-container'>
                <input type='text' name='name' class='input' />
                <label for=''>Username</label>
                <span>Username</span>
              </div>
              <div class='input-container'>
                <input type='email' name='email' class='input' />
                <label for=''>Email</label>
                <span>Email</span>
              </div>
              <div class='input-container'>
                <input type='tel' name='phone' class='input' />
                <label for=''>Phone</label>
                <span>Phone</span>
              </div>
              <div class='input-container textarea'>
                <textarea name='message' class='input'></textarea>
                <label for=''>Message</label>
                <span>Message</span>
              </div>
              <input type='submit' value='Send' class='btn' />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactView;
