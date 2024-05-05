import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJava, FaGitAlt, FaDocker,FaGithub, FaAws ,FaPython} from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiSpringsecurity, SiMysql, SiPostman,SiCsharp } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaSquareSteam, FaMicrochip } from "react-icons/fa6";
import { MdGeneratingTokens } from "react-icons/md";
import './Skills.css';

function Skills() {

    const skilldetails = () => {
        return [
            {
                title: "Python",
                icon: <FaPython className='icon python' style={{ color: "#00dcff" }} />,
            },
            
            {
                title: "MySQL",
                icon: <SiMysql className='icon mysql' style={{ color: "#dbb258" }} />,
            },
            {
                title: "CSharp",
                icon: <SiCsharp className='icon CSharp' style={{ color: "#2496ed" }} />,
            },
            {
                title: "GitHub",
                icon: <FaGithub className='icon github' style={{ color: "black" }} />,
            },
            {
                title: "Postman",
                icon: <SiPostman className='icon postman' style={{ color: "#fd6c35" }} />,
            },
            {
                title: "VS Code",
                icon: <DiVisualstudio className='icon vscode' style={{ color: "#25abf2" }} />,
            },
            {
                title: "AWS",
                icon: <FaAws className='icon aws' style={{ color: "#ff9900" }} />,
            },
        ];
    };

    return (
        <div className='skills-container' id='skills' style={{ paddingTop: '80px' }}>
            <div className='skills-content'>
                <h1 className='skills-title text-center'>Skills</h1>
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="box">
                            <h1 className='text-center mt-3 coding'></h1>
                            <div className='new-container'>
                                <SkillBoxes skills={skilldetails().slice(0,7)} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

function SkillBoxes({ skills }) {
    return (
        skills.map((skill, index) => (
            <SkillBox key={index} title={skill.title} icon={skill.icon} />
        ))
    );
}

function SkillBox({ title, icon }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="smallbox">
                {icon} {/* Render the icon */}
                <div>{title}</div> {/* Render the skill name */}
            </div>
        </div>
    );
}

export default Skills;
