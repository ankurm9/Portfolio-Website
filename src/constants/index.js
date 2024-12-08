import project1 from "../assets/projects/project-1.jpg"; 
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a final-year Bachelor’s student specializing in Python and machine learning, with a passion for solving real-world problems through data-driven solutions. I have developed projects in areas such as visa approval prediction, sentiment analysis, and AI-powered voice assistance. My goal is to continuously learn, apply my technical skills effectively, and contribute to innovative projects.`;

export const ABOUT_TEXT = `I am a detail-oriented and highly motivated individual pursuing a Bachelor's degree in engineering, specializing in Python and machine learning. My work spans across predictive modeling, data analytics, and AI development, focusing on creating impactful and user-friendly applications. Through hands-on experience in projects, I have honed my skills in tools like Numpy, Pandas, and Scikit-learn. I thrive on solving complex problems and am eager to bring my expertise to dynamic and challenging environments.`;

// export const EXPERIENCES = [
//   {
//     year: "2025 (Expected)",
//     role: "B.Tech in Computer Science and Engineering with an specialization in Artificial Intelligence and Machine Learning",
//     institution: "Board of Higher Secondary Education, Maharashtra",
//     description: `Currently pursuing my Bachelor’s in Technology, specializing in Python, data analytics, and machine learning. Key areas of study include exploratory data analysis, predictive modeling, and building AI-driven applications.`,
//     technologies: ["Python", "C++", "Numpy", "Pandas", "Scikit-learn"],
//   },
// ];
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Visa Approval Prediction",
    image: project1,
    description:
      "Developed a machine learning model to predict the likelihood of US visa approval based on historical data, offering applicants data-driven insights to improve their chances of success.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "YouTube Comment Sentiment Analysis",
    image: project2,
    description:
      "Created a Python application to analyze sentiments in YouTube comments using the VADER sentiment analysis tool. Visualized results with charts and implemented comment filtering to exclude irrelevant entries.",
    technologies: ["Python", "VADER", "Matplotlib", "Numpy"],
  },
  {
    title: "AI-Powered Voice Assistant",
    image: project3,
    description:
      "Built an AI-based voice assistant using Python libraries like SpeechRecognition and pyttsx3. The assistant handles natural language understanding, enabling tasks such as email writing and app control via voice commands.",
    technologies: ["Python", "SpeechRecognition", "pyttsx3", "NLP"],
  },
];

export const CONTACT = {
  address: "Maharashtra, India",
  phoneNo: "+91 12345 67890",
  email: "your.email@example.com",
};

