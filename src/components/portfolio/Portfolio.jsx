// import React from 'react';
// import './portfolio.css';
// import IMG1 from '../../assets/1.png';
// import IMG2 from '../../assets/2.png';
// import IMG3 from '../../assets/3.png';
// import IMG4 from '../../assets/4.png';
// import IMG5 from '../../assets/5.png';
// import IMG6 from '../../assets/6.png';
// import videoDemo from '../../assets/11v.mp4';
// import videoDemo1 from '../../assets/2v.mp4';
// import videoDemo2 from '../../assets/3v.mp4';
// import videoDemo3 from '../../assets/4v.mp4';
// import videoDemo4 from '../../assets/5v.mp4';
// import videoDemo5 from '../../assets/6v.mp4';

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'MOSAIC: An Intelligent Event Recommendation System',
//     github: 'https://github.com/akki-2002',
//     video: videoDemo, // Use the imported video file
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'ACEWEARS: Shopping Website',
//     github: 'https://github.com/akki-2002',
//     video: videoDemo1, // Use the imported video file
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'SORTEX: Sorting Visualizer',
//     github: 'https://github.com/akki-2002',
//     video: videoDemo2, // Use the imported video file
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'Shopping Mall Management Backend',
//     github: 'https://github.com/akki-2002',
//     video: videoDemo3, // Use the imported video file
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'MyBlogG: Blog Website Frontend',
//     github: 'https://github.com/akki-2002',
//     video: videoDemo4, // Use the imported video file
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: 'Calculator Project',
//     github: 'https://github.com/akki-2002',
//     video: videoDemo5, // Use the imported video file
//   }

// ];

// function Portfolio() {
//   // Function to handle opening the video in a new window
//   const openVideoInNewWindow = (videoURL) => {
//     window.open(videoURL, '_blank');
//   };

//   return (
//     <section id="portfolio">
//       <h4>My Recent Work</h4>
//       <h2>Portfolio</h2>

//       <div className="container portfolio_container">
//         {data.map(({ id, image, title, github, video }) => {
//           return (
//             <article key={id} className="portfolio_item">
//               <div className="portfolio_item-image">
//                 <img src={image} alt={title} />
//               </div>
//               <h3>{title}</h3>
//               <div className="portfolio_item-cta">
//                 <a href={github} className="btn">
//                   Github
//                 </a>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => openVideoInNewWindow(video)}
//                 >
//                   Demo
//                 </button>
//               </div>
//             </article>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Portfolio;

import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/1.png";
import IMG4 from "../../assets/2.png";
import IMG5 from "../../assets/3.png";
import IMG6 from "../../assets/4.png";
import IMG7 from "../../assets/5.png";
import IMG8 from "../../assets/6.png";
import IMG2 from "../../assets/7.png";
import IMG3 from "../../assets/8.png";
import videoDemo1 from "../../assets/mosaic.mp4";
import videoDemo4 from "../../assets/acewears.mp4";
import videoDemo5 from "../../assets/3v.mp4";
import videoDemo6 from "../../assets/4v.mp4";
import videoDemo7 from "../../assets/5v.mp4";
import videoDemo8 from "../../assets/6v.mp4";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "MOSAIC: An Intelligent Event Recommendation System",
    description:
      "Mosaic: A MERN-based project revolutionizing college event promotion. It offers colleges a seamless platform for event showcasing and empowers students with event discovery. Featuring an intelligent Event Recommendation System, Mosaic ensures personalized event experiences. Plus, Chat Bot Assistance enhances user support.",
    github: "https://github.com/OmkarGarate/Mosaic_Main/tree/akshat",
    video: videoDemo1, // Use the imported video file
  },

  {
    id: 2,
    image: IMG2,
    title: "Job Seeking: A Secure Job Seeker Portal",
    description:
      "A Job Seeking website has robust security measures like HTTPOnly and Secure cookies, with JWT token-based authentication for user sessions. This platform allows easy job browsing and application. Admin functionalities facilitate smooth management of job postings and applicant data, providing detailed insights for employers.",
    github: "https://github.com/akki-2002/Job_Seeking",
    video: "https://jobseekingwebapp.netlify.app", // Use the imported video file
  },

  {
    id: 3,
    image: IMG3,
    title: "My Portfolio Website",
    description:
      "Portfolio Website: Crafted with ReactJS, this dynamic platform showcases my professional journey through sections including Home, About, Experience, Education, Projects & Certifications. A user-friendly design facilitates seamless navigation, complemented by a Contact Form for easy communication. The inclusion of a footer ensures comprehensive accessibility.",
    github: "https://github.com/akki-2002",
    video: "https://akshatagrawalportfoliowebsite.netlify.app", // Use the imported video file
  },

  {
    id: 4,
    image: IMG4,
    title: "ACEWEARS: Shopping Website",
    description:
      "AceWears, an E-commerce Website made using tools like Tailwind CSS, React.js, Express.js, Node.js, and MongoDB. This project demonstrates my skills in building websites and working with a team to make clients and users satisfied. It offers a seamless shopping experience with features like product categorization, user authentication, and secure payment processing.",
    github: "https://github.com/OmkarGarate/Acewears/tree/akshat",
    video: videoDemo4, // Use the imported video file
  },
  {
    id: 5,
    image: IMG5,
    title: "SORTEX: Sorting Visualizer",
    description:
      "Sortex, a Sorting Visualizer tool. It is designed to help people understand how sorting algorithms work by showing them visually. This tool is great for learning and comparing different sorting methods performance. With Sortex, users can see algorithms like bubble sort or quicksort in action, making complex concepts easier to grasp.",
    github: "https://github.com/akki-2002/Sortex",
    video: videoDemo5, // Use the imported video file
  },
  {
    id: 6,
    image: IMG6,
    title: "Shopping Mall Management Backend",
    description:
      "Implemented a web-based admin module for a Shopping Mall Management System using Java Spring Boot. The project involved CRUD operations, login/logout functionalities for admin accounts, MySQL database integration, and RESTful API. Validated functionality through deployment and testing on a local server using Postman.",
    github: "https://github.com/akki-2002/ShoppingMallManagement-Backend",
    video: videoDemo6, // Use the imported video file
  },
  {
    id: 7,
    image: IMG7,
    title: "MyBlogG: Blog Website Frontend",
    description:
      "MyBlogG, a fully responsive frontend for a personal blog website. Crafted a dynamic user interface using HTML, CSS, and JavaScript, featuring a sidebar for navigating between different blogs, a blog post section, categories, popular posts, popular tags, and a newsletter subscription form.",
    github: "https://github.com/akki-2002/MyBlogG_Blog_Frontend",
    video: videoDemo7, // Use the imported video file
  },
  {
    id: 8,
    image: IMG8,
    title: "Calculator Project",
    description:
      "Created a calculator website, providing users with an online tool for basic arithmetic operations. Designed with HTML, CSS, and JavaScript, the website offers a user-friendly interface that is easy to navigate and use. The website is accessible and responsive across different devices, providing a seamless experience for users.",
    github: "https://github.com/akki-2002/Calculator_Website",
    video: videoDemo8, // Use the imported video file
  },
  // Add descriptions for other projects similarly
];

function Portfolio() {
  // Function to handle opening the video in a new window
  const openVideoInNewWindow = (videoURL) => {
    window.open(videoURL, "_blank");
  };

  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, description, github, video }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
                <div className="description_container">
                  <p className="description">{description}</p>
                  <div className="portfolio_item-cta">
                    <a href={github} className="btn">
                      Github
                    </a>
                    <button
                      className="btn btn-primary"
                      onClick={() => openVideoInNewWindow(video)}
                    >
                      Demo
                    </button>
                  </div>
                </div>
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
