import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./CourseDetails.css";

const courseDetailsData = {
  cybersecurity: {
    title: "Cybersecurity & Ethical Hacking",
    description:
      "Master cybersecurity principles, ethical hacking, penetration testing, and secure your digital world with real-world projects.",
  },
  datascience: {
    title: "Data Science & AI/ML",
    description:
      "Become a data expert by learning Machine Learning, AI, data visualization, and statistical modeling with real-world datasets.",
  },
  webdev: {
    title: "Web Development (React, Node, Next.js)",
    description:
      "Learn full-stack development using latest technologies like ReactJS, NodeJS, Next.js, and build scalable web applications.",
  },
  mobiledev: {
    title: "Mobile App Development (Flutter, React Native)",
    description:
      "Create stunning mobile apps for Android and iOS platforms using Flutter and React Native, and publish them on stores.",
  },
  cloud: {
    title: "Cloud Services (AWS, GCP, Azure)",
    description:
      "Understand cloud architecture, deployment, and security with major cloud platforms like AWS, Google Cloud, and Azure.",
  },
  devops: {
    title: "DevOps & CI/CD Automation",
    description:
      "Learn the DevOps culture, automate deployment pipelines, and master CI/CD tools like Jenkins, Docker, and Kubernetes.",
  },
};

function CourseDetails() {
  const [count, setCount] = useState(0);
  const { courseId } = useParams();
  const course = courseDetailsData[courseId];

  useEffect(() => {
    let start = 0;
    const end = 1000;
    const duration = 300;
    const incrementTime = 1;
    const steps = end / (duration / incrementTime);

    const counter = setInterval(() => {
      start += steps;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, []);

  if (!course) {
    return <div className="course-details">Course Not Found!</div>;
  }

  return (
    <>
      <div className="course-details">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <div className="counter-container">
        <h1 className="counter-title">Clients Reached</h1>
        <div className="counter-box">{count.toLocaleString()}</div>
      </div>
    </>
  );
}

export default CourseDetails;
