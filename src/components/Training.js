import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Training.css";

function Training() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const courses = [
    { id: "cybersecurity", name: "Cybersecurity & Ethical Hacking" },
    { id: "datascience", name: "Data Science & AI/ML" },
    { id: "webdev", name: "Web Development (React, Node, Next.js)" },
    { id: "mobiledev", name: "Mobile App Development (Flutter, React Native)" },
    { id: "cloud", name: "Cloud Services (AWS, GCP, Azure)" },
    { id: "devops", name: "DevOps & CI/CD Automation" },
  ];

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

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <>
      <div className="training-section">
        <h2>Our Training Expertise</h2>
        <p>We provide industry-level, project-based training in:</p>
        <div className="expertise-list">
          {courses.map((course) => (
            <div
              key={course.id}
              className="expertise-item clickable"
              onClick={() => handleCourseClick(course.id)}
            >
              ✅ {course.name}
            </div>
          ))}
        </div>
      </div>
      <div className="counter-container">
        <h1 className="counter-title">Clients Reached</h1>
        <div className="counter-box">{count.toLocaleString()}</div>
      </div>
    </>
  );
}

export default Training;
