import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../assets/imgs/my-pic.jpg';
import myHeadshot from '../../assets/imgs/headshot.png';
import arrow from '../../assets/svgs/arrow.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import './base.scss';

export default function Base({ menu }: any) {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello! 👋🏻 I'm <br /> Kponkius Gabriel.
          </h1>
          <div className="my-pic">
            <div className="gradient"></div>
            <img className="" src={myHeadshot} alt="my-avatar" />
          </div>
        </div>

        <div className="description">
          <p>
            <span>
                         
              
              Hi, I’m a <span className="highlight">Software Engineer 🧑🏻‍💻 </span> and{' '} recent <span className="highlight">Computer Science  graduate 👨🏻‍🎓 </span>with a love for solving problems through code. I enjoy turning ideas into clean, scalable, and high-quality software that makes an impact.
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/projects">
            <button className="explore">Explore ➜</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>
          <li className={menu[1]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet" /> PROJECTS
              </Link>
            </small>
          </li>

          <li className={menu[2]}>
            <small>
              02
              <Link to="/features">
                <img src={navLine} alt="menu bullet" /> TESTIMONIALS
              </Link>
            </small>
          </li>

          <li className={menu[3]}>
            <small>
              03
              <Link to="/contact">
                <img src={navLine} alt="menu bullet" /> CONTACT
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <div className="container">
          <div className="gradient"></div>
          <img src={myHeadshot} alt="" />
        </div>

        <div className="social">
          <a href="https://wa.me/2347056329088" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
            <img src={arrow} alt="pointer" />
          </a>

          <a href="https://twitter.com/kponkius" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter <img src={arrow} alt="pointer" />
          </a>

          <a href="https://www.linkedin.com/in/kponkius-gabriel/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
