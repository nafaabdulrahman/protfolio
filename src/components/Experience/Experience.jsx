import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

function Experience() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [isHovering, setIsHovering] = useState(false);
    const [boxHeights, setBoxHeights] = useState([]);
    const [isPhone, setIsPhone] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    const handleHover = (index) => {
        setHoverIndex(index);
        setIsHovering(true);
    };

    const handleHoverOut = () => {
        setHoverIndex(null);
        setIsHovering(false);
    };

    const getBoxHeight = (index) => {
        if ((isPhone || isTablet) && window.innerWidth >= 1024) {
            return '100%';
        } else {
            return isPhone || isTablet ? '40vh' : `${window.innerHeight * 0.7}px`;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setBoxHeights(Array(details.length).fill('auto'));
            setIsPhone(window.innerWidth < 768); // Adjust the tablet breakpoint as needed
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024); // Adjust the tablet breakpoint as needed
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const boxDetails = () => {
        return [
            {
                companyLogo: "/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Mar 2022 - present",
                jobTitle: "Systems Engineer",
                description: `<ul>
                    <li>Learnt Java and Spring Boot basics with senior developers' guidance for backend system development.</li>
                    <li>Get introduced to React JSX and front-end development principles to create user-friendly interfaces.</li>
                    <li>Assisted in building and integrating RESTful APIs using Spring Boot, and understand API security with Spring Security, JWT, and OAuth.</li>
                    <li>Supported the design and implementation of microservices architecture, understanding its advantages in system scalability and modularity.</li>
                </ul>`,
            },
            {
                companyLogo: "/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Dec 2021 - Mar 2022",
                jobTitle: "Systems Engineer Trainee",
                description: `<ul>
                    <li>Participated in Python,AWS,C# training programs at Infosys, acquiring essential skills for backend development.</li>
                    <li>Received hands-on training in developing scalable and efficient backend systems using python and C#, along with .Net frameworks.</li>
                    <li>Acquired practical experience in building  APIs with .net, employing industry-standard practices for secure and efficient communication.</li>
                </ul>`,
            },
            {
                companyLogo: "/F:\protfolio\protfolio\portfolio_website\public\mewatrading.png",
                companyName: "Merwat Trading Pvt. Ltd",
                date: "mar 2020 - mar 2021",
                jobTitle: "Business Analyst",
                description: `<ul>
                    <li>Provided frontline technical support via chat, resolving customer queries and troubleshooting issues promptly to ensure high customer satisfaction.</li>
                    <li>Collaborating closely with stakeholders, design solutions and develop business cases to justify proposed changes.</li>
                    <li>A business analyst serves as a liaison between business stakeholders and technical teams, focusing on improving organizational efficiency and achieving strategic objectives.</ul>`,
            }
        ];
    };

    const details = boxDetails();

    const updateBoxHeight = (index) => {
        const newHeights = [...boxHeights];
        newHeights[index] = getBoxHeight(index);
        setBoxHeights(newHeights);
    };

    return (
        <div className='experience' id='experience' >
            <h1 className='text-center text-light'>Experience</h1>
            <div className='row mt-5'>
                {details.map((boxDetail, index) => (
                    <div
                        key={index}
                        className="col-lg-3 col-md-6 col-sm-12 boxes"
                        onMouseEnter={() => {
                            handleHover(index);
                            updateBoxHeight(index);
                        }}
                        onMouseLeave={() => handleHoverOut()}
                        style={{
                            height: (hoverIndex === index || (isHovering && hoverIndex === null)) ? boxHeights[index] : 'auto',
                            maxHeight: boxHeights[index],
                            overflowY: (isPhone || isTablet) && window.innerWidth >= 1024 ? 'scroll' : 'auto',
                        }}
                    >
                        <div className="box-content">
                            <div className="boxinfosys">
                                {boxDetail.companyLogo && (
                                    <img
                                        src={boxDetail.companyLogo}
                                        className="company-logo me-3"
                                        alt="Company Logo"
                                    />
                                )}
                                <div>
                                    <p className='mt-2 boxdetails'>{boxDetail.jobTitle}</p>
                                    <p className='companyName mb-0'>{boxDetail.companyName}</p>
                                    <p className='companyDate'>{boxDetail.date}</p>
                                    <div dangerouslySetInnerHTML={{ __html: boxDetail.description }} className='companyDescription' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
