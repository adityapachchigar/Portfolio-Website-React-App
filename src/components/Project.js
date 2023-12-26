import React from 'react'
import ProjectCard from './ProjectCard';
// import data from './projectData.json'
import i1 from "../images/1.jpeg"
import i2 from "../images/2.jpeg"
import i3 from "../images/3.jpeg"
import i4 from "../images/4.jpeg"
import i5 from "../images/5.jpeg"
import i6 from "../images/6.jpeg"
import i7 from "../images/7.jpeg"
import i8 from "../images/8.jpeg"
import i9 from "../images/9.jpg"



const Project = () => {
  return (
    <>
        <div className='section container my-3'  id="/s3">
            <h2>My Projects</h2>

            <div className="row">

            <div className="col-md-4">
                <ProjectCard title="CryptoBoost Crypto Trading Website"
                description="Web Development Project about Crypto Trading created with React, Chakra UI and Javascript. This provides information about various crypto exchange websites and various coins and rank them accordingly."
                imageUrl={i1}
                readMore="https://github.com/adityapachchigar/CryptoBoost-Crypto-Trading-Website"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="PickDeals - Online Price Comparator"
                description="Simple Django Project which compares the prices of the commodities that you search on our website, on other e-commerce websites like Ajio, Shoppers Stop, Lifestyle, etc. with the help of Web Scrapping using library Beautiful Soup."
                imageUrl={i2}
                readMore="https://github.com/adityapachchigar/PickDeals-Online-Price-Comparator/tree/main"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="ML Based - Gender Recognition System"
                description="Totally-ML based project which is trained to recognize gender from the photograph. Web Development has been done with the help of FLASK in Python. We have applied PCA(Principal Component Analysis) along with Ensemble models."
                imageUrl={i3}
                readMore="https://github.com/adityapachchigar/Gender-Recognition-System/tree/main"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="Scheduling Algorithms in OS"
                description="This is a simple Python project demonstrating the scheduling algorithms of Operating System like FCFS,Round Robin, SRTN, etc. along with their Gantt charts and average times."
                imageUrl={i4}
                readMore="https://github.com/adityapachchigar/Scheduling-Algorithms-OS/tree/main"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="Email Bot on Voice Commands"
                description="This project is based on some libraries of Python which I have used in order to achieve an Email Bot which totally works on Voice. You just have to tell receiver's name, the bot will send email to the receiver."
                imageUrl={i5}
                readMore="https://github.com/adityapachchigar/Email-Bot-on-Voice-Commands/tree/main"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="To-do List Application" 
                description="This is a simple To-do list Application created using React.js, Next.js and Tailwind.css"
                imageUrl={i6}
                readMore="https://github.com/adityapachchigar/To-do-List-APP"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="Salesmate Inventory Management Asisstant"
                description="A Web Development Project including which includes developing a website for vendors and providing them with Physical and Virtual Inventory and giving suggestions with the help of Web Scrapping."
                imageUrl={i7}
                readMore="https://github.com/adityapachchigar/Salesmate-Inventary-Management-Assisstant/tree/main"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="Heart Disease Prediction"
                description="This is a project related to Classification concept of Machine Learning. In this project, I have predicted whether a person has heart disease or not based on the data available."
                imageUrl={i8}
                readMore="https://github.com/adityapachchigar/Heart-Disease-Prediction/tree/main"
                />
            </div>
            <div className="col-md-4">
                <ProjectCard title="Admin Dashboard React App"
                description="This is a simple Admin Dashboard made with ReactJS along with features like pagination. edit, delete rows by selecting multiple rows. I have also deployed the website using Netlify."
                imageUrl={i9}
                readMore="https://github.com/adityapachchigar/Admin-Dashboard-React-App"
                />
            </div>


            {/* {data.map(project => (
                <div className="col-md-4">
                    <ProjectCard title={project.title} 
                    description={project.description} 
                    imageUrl={project.imageUrl}
                    readMore={project.readMore}
                    />
                </div>
            ))} */}
            
            </div>
        </div>
    </>
  );
}

export default Project