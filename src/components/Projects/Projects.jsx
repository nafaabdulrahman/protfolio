import React from 'react';
import './Projects.css';

function Projects() {

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    };

    const projectDetails = () => {
        return [
            {
                projectLogo: "portfolio_website/public/Twitter scraping design (1).png",
                projectName: "Twitter Scrapping",
                technologyUsed: "Python,Pandas,Streamlit,Snscrape,MySQL,Pymongo,PyMongo",
                projectDescription: "This project aims to scrape Twitter data using the snscrape library, store it in MongoDB, and display the scraped data in a GUI built with Streamlit. The user can enter a keyword or hashtag to search, select a date range, and limit the number of tweets to scrape. The scraped data is displayed in the GUI and can be uploaded to the database, downloaded as a CSV or JSON file."
            },
            {
                projectLogo: "portfolio_website/public/phonepe (2).png",
                projectName: "PhonePe Pulse Data Analysis ",
                technologyUsed: "Python 3.11,Pandas,Streamlit,Plotly,Matplotlib,Geopandas,Requests,MySQL.",
                projectDescription: "Data Analysis Combining Streamlit, Plotly, GeoPandas, and Matplotlib for PhonePe Pulse Data Analysis offers a powerful toolkit for visualizing and exploring financial data. Streamlit provides an interactive web interface for data exploration, while Plotly enables the creation of dynamic and interactive plots. GeoPandas adds geospatial capabilities, allowing users to analyze location-based data such as spending patterns across regions. Matplotlib complements the toolkit with versatile plotting functions for creating custom visualizations. By leveraging these tools together, users can conduct comprehensive data analysis, gain insights into their spending habits, and make informed financial decisions through a seamless and interactive experience."
            },
            {
                projectLogo: "portfolio_website/public/ekart.png",
                projectName: "Ekart Application",
                technologyUsed: "CSharp,Aws,asp.net frameworks,MySQL",
                projectDescription: "TheKart is a strong online shopping platform made with C# and .NET. It lets users shop easily with features like logging in, browsing products, adding them to a cart, and securely checking out. It also has order tracking. The site works well on phones and computers, and it's reliable and secure for both users and admins."
            },
            
        ];
    };

    return (
        <div className='projects' id='projects'>
            <h1 className='text-center text-light' style={{ paddingTop: '80px' }}>Projects</h1>
            <div className="projects-container mt-5">
                <div className="row justify-content-center">
                    {projectDetails().map((project, index) => (
                        <div key={index} className='projectbox col-lg-4 col-md-6 col-sm-12'>
                            <img src={project.projectLogo} alt="Project Logo" className="project-logo img-fluids" />
                            <h2 className='mt-3' style={{ fontSize: '1.5rem' }}>{project.projectName}</h2>
                            <p className='' style={{ fontSize: '0.75rem' }}>{project.projectDescription}</p>
                            <p style={{ fontSize: '0.75rem' }}>Technologies used: {project.technologyUsed}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
