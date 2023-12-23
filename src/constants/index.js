import credence from "../../assets/images/credence.png";
import  saf   from "../../assets/images/saf.png";
import  telemarketer  from "../../assets/images/telemarketer.png";
import  china  from "../../assets/icons/china.svg";
import  csharp  from "../../assets/icons/csharp.svg";
import  help  from "../../assets/icons/help.svg";
import  home  from "../../assets/icons/home.svg";
import  jakarta  from "../../assets/icons/jakarta.svg";
import  java  from "../../assets/icons/java.svg";
import  portfolio  from "../../assets/icons/portfolio.svg";
import  python  from "../../assets/icons/python.svg";
import  shop  from "../../assets/icons/shop.svg";
import  sql  from "../../assets/icons/sql.svg";
import  three  from "../../assets/icons/three.svg";
import  tiktok  from "../../assets/icons/tiktok.svg";
import  unity  from "../../assets/icons/unity.svg";

import {

    contact,
    css,
    git,
    github,
    html,
    linkedin,
    react,
    tailwindcss,
   
} from "../../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },

    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },

    {
        imageUrl: python,
        name: "Python",
        type: "BackEnd",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "FrontEnd",
    },

    {
        imageUrl: three,
        name: "three js",
        type: "FronEnd 3D objects",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

    
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },

    {
        imageUrl: jakarta,
        name: "Jakarta EE",
        type: "Enterprise Systems",
    },
    

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Financial Advisor Intern",
        company_name: "Credence",
        icon: credence,
        iconBg: "#accbe1",
        date: "Decemeber 2022 - January 2023",
        points: [
            "Collaborated with experienced advisors to conduct in-depth portfolio analysis and client discussions, contributing to enhancement of clients' financial positions",
            "Crafted customized policies for clients from diverse backgrounds, enhancing satisfaction and retention",
            "Completed the M9, M9A, M5, and HI CMFAS Examinations at SCI, attaining certification as an accredited Financial Advisor",
        ],
    },
    {
        title: "Signaller",
        company_name: "Singapore Armed Force",
        icon: saf,
        iconBg: "#fbc3bc",
        date: "Apr 2021 - Apr 2022",
        points: [
            "Facilitated the maintenance of software systems to streamline Officer VBS training",
            "Managed logistical operations for Officer Training Programs.",
            "Proficient in configuring multiple radio sets commonly employed in outfield settings.",
        ],
    },
    {
        title: "Telemarketer",
        company_name: "Tele Center",
        icon: telemarketer,
        iconBg: "#b7e4c7",
        date: "Feb 2019 - Apr 2019",
        points: [
            "Provided dedicated support to the Ministry of Health's COVID Hotline during the pandemic, ensuring prompt and reliable assistance to the public",
            "Demonstrated respect, friendliness and willingness to help, ensuring coherence of team",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/zhisheng-foo',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/foo-zhi-sheng-b250b124a/',
    }
];

export const projects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Career Portfolio (this one!)',
        description: 'Leveraged on React and Three js framework to craft an interactive career portfolio, showcasing professional milestones and projects with engaging 3D visualizations',
        link: 'https://github.com/zhisheng-foo/Portfolio-Website',
    },
    {
        iconUrl: home,
        theme: 'btn-back-green',
        name: 'Home Invasion',
        description: 'Programmed a 2D RPG game "Home Invasion, where player can face numerous puzzles and bosses as they progress through the levels. Please come and try it!',
        link: 'https://zhisheng-foo.itch.io/orbital-project-prototype-5638',
        link: 'https://github.com/zhisheng-foo/Orbital'
    },
    {
        iconUrl: tiktok,
        theme: 'btn-back-blue',
        name: 'TikShop Connect',
        description: 'Utilizing Ionic framework to implement TikShop Connect- a cutting-edge feature aimed at enhancing the TikTok shopping experience, resulting in improved user engagement and satisfaction',
        link: 'https://devpost.com/software/tikshop-connect',
    },
    {
        iconUrl: shop,
        theme: 'btn-back-pink',
        name: 'Discrete Event Simulator',
        description: 'Coded a Discrete Event Simulator, simulating the processes of a shop for Programming Methodology II.',
        link: 'https://github.com/zhisheng-foo/CS2030',
    },
    {
        iconUrl: china,
        theme: 'btn-back-black',
        name: 'Volunteer Teaching Exchange Program to Beijing',
        description: 'Volunteered in a 10-day teaching school trip to Beijing, providing English education to students at Dandelion High School',
        link: '',
    },

    {
        iconUrl: help,
        theme: 'btn-back-black',
        name: 'Project CPAS 2018',
        description: 'Conducted monthly sensory stimulation sessions for students at Cerebral Palsy Alliance, focusing on the five human senses',
        link: '',
    },
  
];