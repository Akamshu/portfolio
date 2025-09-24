import React, { useEffect } from 'react';
import Helmet from '../Utils/SEO/helmet';
import { v4 as uuid } from 'uuid';
import { Link } from "react-router-dom";
import { Feature } from '../Utils/Feature/feature';
import img1 from '../../assets/imgs/2.png';
import img2 from '../../assets/imgs/4.jpg';
import img3 from '../../assets/imgs/3.png';
import img4 from '../../assets/imgs/f-4.webp';
import './features.scss';
import { motion } from "framer-motion";



// Props
type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

interface Testimonial {
  id: string;
  name: string;
  feedback: string;
  role: string;
  img: string;
  link?: string;
}

const Testimonials_Data: Testimonial[] = [
  {
    id: uuid(),
    name: "",
    feedback:
      "Working with Gabriel was an absolute pleasure. He transformed our outdated website into a sleek, modern platform that not only looks beautiful but also performs flawlessly. Our customer engagement has doubled since launch!",
    role: "Mr. Hilary Ogwoni",
    img: img1,
    link: "",
  },
  {
    id: uuid(),
    name: "",
    feedback:
      "We hired Kponkius for a complete website redesign, and the results exceeded our expectations. He not only improved the design but also optimized the user experience, making navigation intuitive and seamless..",
    role: "Sunday Akamshu",
    img: img2,
    link: "",
  },
  {
    id: uuid(),
    name: "",
    feedback: "From start to finish, Gabriel was professional, creative, and detail-oriented. He communicated clearly throughout the process and delivered ahead of schedule. Our online presence has never looked better. 🏆",
    role: "Adebayo Yesuf",
    img: img3,
    link: "",
  },
];

export default function Testimonials(props: Prop) {
  useEffect(() => {
    props.activeMenu(2);
  }, []);

  return (
    <div>
      <Helmet
        title="Testimonials"
        name="Testimonials"
        content="Hear what people say about Kponkius Gabriel"
      />

      <div className="testimonials_showcase">
        {Testimonials_Data.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="testimonial_card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="testimonial_img"
            />
            <div className="testimonial_content">
              <h3>{testimonial.name}</h3>
              <p className="role">{testimonial.role}</p>
              <p className="feedback">“{testimonial.feedback}”</p>
              {testimonial.link && (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read_more"
                >
                  Read More ➜
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/resume">
          <button>Résumé ➜ </button>
        </Link>
      </div>
    </div>
  );
}
