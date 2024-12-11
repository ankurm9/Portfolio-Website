import project1 from "../assets/projects/project-1.jpg"; 
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a final-year Bachelor’s student specializing in Python and machine learning, with a passion for solving real-world problems through data-driven solutions. I have developed projects in areas such as visa approval prediction, sentiment analysis, and AI-powered voice assistance. My goal is to continuously learn, apply my technical skills effectively, and contribute to innovative projects.`;

export const ABOUT_TEXT = `I am a detail-oriented and highly motivated individual pursuing a Bachelor's degree in engineering, specializing in Python and machine learning. My work spans across predictive modeling, data analytics, and AI development, focusing on creating impactful and user-friendly applications. Through hands-on experience in projects, I have honed my skills in tools like Numpy, Pandas, and Scikit-learn. I thrive on solving complex problems and am eager to bring my expertise to dynamic and challenging environments.`;

export const EXPERIENCES = [
  {
    year: "2025 (Expected)",
    role: "B.Tech in Computer Science and Engineering with an specialization in Artificial Intelligence and Machine Learning",
    institution: "Board of Higher Secondary Education, Maharashtra",
    description: `Currently pursuing my Bachelor’s in Technology, specializing in Python, data analytics, and machine learning. Key areas of study include exploratory data analysis, predictive modeling, and building AI-driven applications.`,
    technologies: ["Python", "C++", "React", "Pandas", "Scikit-learn"],
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
  address: "Pune, India",
  phoneNo: "+91 86006 68117",
  email: "ankurmaddewad7@gmail.com",
};

