import React from "react";
import "./Teams.css";

const teamMembers = [
    {
        name: "Yogesh Awale",
        role: "Director",
        image: require("../TeamImg/default-male.jpg"),
        bio: "Founder of PathFortune PVT LTD, leading innovation and strategic growth."
    },
    {
        name: "Vikram Gadivan",
        role: "Director",
        image: require("../TeamImg/default-male.jpg"),
        bio: "Founder of PathFortune PVT LTD, leading innovation and strategic growth."
    },
    {
        name: "Shakti Jadhav",
        role: "Head Accounts",
        image: require("../TeamImg/default-male.jpg"),
        bio: "Founder of PathFortune PVT LTD, leading innovation and strategic growth."
    },
    {
        name: "Priya Sharma",
        role: "Manager",
        image: require("../TeamImg/default-female.jpg"),
        bio: "Experienced in managing operations and project deliveries across teams."
    },
    {
        name: "Prajakta Khade",
        role: "HR Head",
        image: require("../TeamImg/default-female.jpg"),
        bio: "Human Resources expert ensuring healthy and productive workplace culture."
    },
    {
        name: "Aditi Verma",
        role: "Tech Lead",
        image: require("../TeamImg/default-female.jpg"),
        bio: "Leading technical teams with expertise in software architecture."
    },
    {
        name: "Vishal Abhange",
        role: "Trainer",
        image: require("../TeamImg/default-male.jpg"),
        bio: "Provides training and mentorship to new talents in the company."
    },
    {
        name: "Neha Joshi",
        role: "Trainer",
        image: require("../TeamImg/default-female.jpg"),
        bio: "Expert in cybersecurity and web development training."
    },
];

function Team() {
    return (
        <div className="team-container">
            <h1>Meet Our Team</h1>
            <p className="team-intro">Our leadership and core members bring expertise, energy, and passion to everything we do.</p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
