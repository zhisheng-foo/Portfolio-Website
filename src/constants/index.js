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
import  task  from "../../assets/icons/task.png";
import javascript from "../../assets/icons/javascript.svg";
import ember from "../../assets/icons/ember.png";
import postgres from "../../assets/icons/postgres.png";

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
        imageUrl: javascript,
        name: "JavaScript",
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
        imageUrl: ember,
        name: "Ember",
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
        imageUrl: postgres,
        name: "postgres",
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
            "Actively collaborated with seasoned advisors to perform comprehensive portfolio analysis and client consultations, significantly enhancing clients' financial positions through strategic advice and planning",
            "Expertly designed and implemented personalized financial policies for clients from various backgrounds, resulting in increased client satisfaction and improved retention rates.",
            "Successfully completed M9, M9A, M5, and HI examinations at the Singapore College of Insurance (SCI), achieving accreditation as a Certified Financial Advisor and demonstrating proficiency in financial regulations, insurance policies, and ethical advisory practices",
        ],
    },
    {
        title: "Signaller",
        company_name: "Singapore Armed Force",
        icon: saf,
        iconBg: "#fbc3bc",
        date: "Apr 2021 - Apr 2022",
        points: [
            "Proactively facilitated the upkeep and optimization of software systems, streamlining the Virtual Battle Space (VBS) training for officers, thereby enhancing the efficiency and effectiveness of training modules.",
            "Efficiently managed logistical operations for Officer Training Programs, overseeing resource allocation, scheduling, and coordination to ensure seamless program execution.",
            "Demonstrated expertise in configuring and operating various radio sets, commonly used in outfield scenarios, ensuring reliable and effective communication in diverse field conditions.",
        ],
    },
    {
        title: "Telemarketer",
        company_name: "Tele Center",
        icon: telemarketer,
        iconBg: "#b7e4c7",
        date: "Feb 2019 - Apr 2019",
        points: [
            "Offered dedicated and efficient support to the Ministry of Health's COVID-19 Hotline during the pandemic. Ensured prompt and reliable assistance to the public, addressing inquiries and concerns, and providing accurate information during a critical health crisis",
            "Consistently demonstrated respect, friendliness, and a strong willingness to assist in team efforts. Contributed to maintaining team coherence and effectiveness, ensuring high-quality customer support and collaborative problem-solving.",
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
        iconUrl: task,
        theme: 'btn-back-orange',
        name: 'Full-Stack Task Management Application System',
        description: 'A sleek task management tool combining LoopBack 3.0, Ember.js, and PostgreSQL for efficient team and individual task tracking',
        link: 'https://github.com/zhisheng-foo/Task-Management',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Career Portfolio (this one!)',
        description: 'Leveraged on React and Three js framework to craft an interactive career portfolio, showcasing professional milestones and projects with engaging 3D visualizations.',
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
        description: 'Utilizing Ionic framework to implement TikShop Connect- a cutting-edge feature aimed at enhancing the TikTok shopping experience, resulting in improved user engagement and satisfaction.',
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
        description: 'Volunteered in a 10-day teaching school trip to Beijing, providing English education to students at Dandelion High School.',
        link: '',
    },

    {
        iconUrl: help,
        theme: 'btn-back-black',
        name: 'Project CPAS 2018',
        description: 'Conducted monthly sensory stimulation sessions for students at Cerebral Palsy Alliance, focusing on the five human senses.',
        link: '',
    },
  
];