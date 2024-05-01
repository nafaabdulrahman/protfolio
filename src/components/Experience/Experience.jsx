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
                companyLogo: "/src/components/Images/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Nov 2023 - Feb 2024",
                jobTitle: "Senior Systems Engineer",
                description: `<ul>
                    <li>Developed scalable backend systems using Java and Spring Boot, integrating Spring Data JPA for efficient database operations.</li>
                    <li>Designed and implemented microservices architecture for enhanced system modularity, scalability, and maintainability.</li>
                    <li>Built RESTful APIs with Spring Boot, ensuring data integrity and authentication through Spring Security, JWT, and OAuth protocols.</li>
                    <li>Developed responsive React interfaces for seamless user experiences, with MySQL expertise for efficient database management. Proficient in Postman, GitHub, Docker, and AWS for streamlined development and deployment.</li>
                </ul>`,
            },
            {
                companyLogo: "/src/components/Images/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Mar 2022 - Nov 2023",
                jobTitle: "Systems Engineer",
                description: `<ul>
                    <li>Learnt Java and Spring Boot basics with senior developers' guidance for backend system development.</li>
                    <li>Get introduced to React JSX and front-end development principles to create user-friendly interfaces.</li>
                    <li>Assisted in building and integrating RESTful APIs using Spring Boot, and understand API security with Spring Security, JWT, and OAuth.</li>
                    <li>Supported the design and implementation of microservices architecture, understanding its advantages in system scalability and modularity.</li>
                </ul>`,
            },
            {
                companyLogo: "/src/components/Images/infosys.jpg",
                companyName: "Infosys Limited",
                date: "Dec 2021 - Mar 2022",
                jobTitle: "Systems Engineer Trainee",
                description: `<ul>
                    <li>Participated in comprehensive Java and Spring Boot training programs at Infosys, acquiring essential skills for backend development.</li>
                    <li>Received hands-on training in developing scalable and efficient backend systems using Java, along with Spring Boot frameworks.</li>
                    <li>Acquired practical experience in building RESTful APIs with Spring Boot, employing industry-standard practices for secure and efficient communication.</li>
                </ul>`,
            },
            {
                companyLogo: "/src/components/Images/glowtouch.jpg",
                companyName: "Glowtouch Technologies Pvt. Ltd",
                date: "Apr 2021 - Dec 2021",
                jobTitle: "Junior Administrator L1",
                description: `<ul>
                    <li>Provided frontline technical support via chat, resolving customer queries and troubleshooting issues promptly to ensure high customer satisfaction.</li>
                    <li>Demonstrated expertise in DNS management, effectively configuring domain settings, resolving DNS-related issues, and ensuring seamless domain functionality.</li>
                    <li>Addressed hosting issues promptly, diagnosing and resolving server-related issues such as downtime, performance degradation, and resource allocation discrepancies.</li>
                    <li>Assisted customers in resolving HTTP status code errors, including 404 (Not Found) and 403 (Forbidden), by identifying and troubleshooting issues related to file paths, permissions, and access control configurations.</li>
                </ul>`,
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
            <p className='experience-description text-center m-3 pb-5 pt-3'>Experienced software engineer with a proven track record in various companies and projects, demonstrating proficiency in diverse technologies and methodologies.</p>
            <div className='row'>
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
