import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Project from '../Utils/Project/project';
import Helmet from '../Utils/SEO/helmet';
import './projects.scss';

type Project = {
  id: string;
  title: string;
  description: string;
  github?: string;
  github2?: string;
  live?: string;
  stack: string;
  isPrivate: boolean;
  isLive: boolean;
};

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

const projects: Project[] = [
  {
    id: uuid(),
    title: 'Kponkius Me 🌍',
    description: 'My Graphics Design Portfolio Website',
    github: 'https://github.com/akamshu',
    live: 'https://grafix-portfolio.vercel.app/',
    stack: 'React + TypeScript + SASS + TailwindCSS',
    isPrivate: true,
    isLive: true,
  },

  {
    id: uuid(),
    title: 'Chisom Nwokwu Portfolio 🌍',
    description: 'A Portfolio Website built for a software engineer at Microsoft',
    github: '',
    live: 'https://www.chisomnwokwu.com/',
    stack: 'React + JavaScript ',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'CALCULATOR',
    description: 'A simple calculator application',
    github: 'https://github.com/akamshu/',
    live: 'https://akamshu.github.io/calculator',
    stack: 'JavaScript + CSS',
    isPrivate: true,
    isLive: true,
  },

  {
    id: uuid(),
    title: 'DMD-WEB 🌍',
    description: 'A Portfolio Website built for a creative digital product designer',
    github: 'https://github.com/tobisamcode/dmd-web',
    live: 'https://dmd-web.vercel.app/',
    stack: 'React + TypeScript + Next + TailwindCSS',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Mathematics Testing App',
    description: 'An Application for Testing pupils Basic Arithmetics',
    github: 'https://github.com/akamshu/math',
    live: 'https://maths-jlirp.puter.site',
    stack: 'Javascript + HTML/CSS',
    isPrivate: true,
    isLive: true,
  },
  
  {
    id: uuid(),
    title: '3D portfolio 💬',
    description: 'My 3D portfolio side .',
    github: 'https://github.com/akamshu',
    live: 'https://kponkius-7ox0x.puter.site/',
    stack: 'Nodejs + Express + Web socket',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Football Match Generator ',
    description: 'An application for generating Football Matches',
    github: 'https://github.com/akamshu/matchf',
    live: 'https://fixture-vr5ze.puter.site',
    stack: 'JavaScript + CS',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'Football Match Result Generator ',
    description: 'An application for generating Football Match Results',
    github: 'https://github.com/akamshu/match',
    live: 'https://matchresult-y0ndc.puter.site',
    stack: 'JavaScript + CSS',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'AI RESUME ANALYZER',
    description: 'AI Based Resume Analyzer to meet up for a particular job application and ATS score ',
    github: 'https://github.com/akamshu',
    live: 'https://kpnkcv-n5q6sj.puter.site/',
    stack: 'React + Vite + Tailwind CSS',
    isPrivate: true,
    isLive: true,
  },
   {
    id: uuid(),
    title: 'Skin Disease Recognition System',
    description: 'An application for predicting and recognizing skin disease based on the image scanned',
    github: 'https://github.com/akamshu/match',
    live: 'https://popsmoke.streamlit.app/',
    stack: 'Python + Machine Learning + StreamLit',
    isPrivate: true,
    isLive: true,
  },
  {
    id: uuid(),
    title: 'PLANT DISEASE RECOGNITION SYSTEM',
    description: 'The App is used in identifying plant diseases efficiently. ',
    github: 'https://github.com/akamshu',
    live: 'https://kponkdisease.streamlit.app/',
    stack: 'Python + Machine Learning + StreamLit',
    isPrivate: true,
    isLive: true,
  },

];

export default function Projects(props: Prop) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  return (
    <div className="project">
      <Helmet title="My Projects" name="Selected Projects" content="Selected Kponkius Gabriel's Projects" />
      <div className=" portfolio_showcase">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/features">
          <button>Features ➜ </button>
        </Link>
      </div>
    </div>
  );
}

