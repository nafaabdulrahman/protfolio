import React from 'react';
import './Education.css';

function Education() {
    const collegeDetails = () => {
        return [
            {
                collegeLogo: "public/mite.png",
                collegeName: "Mangalore Institute of Technology and Engineering",
                date: "jun 2017 - jun 2021",
                collegeDegreeTitle: "Bachelor of Engineering (Mechatronics)",
            }
        ];
    }

    const details = collegeDetails()[0];

    return (
        <div className='education' id='education'>
            <h1 className='text-center text-light mt-3'>Education</h1>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="box-contents">
                        <div className="boxcollege">
                            <div className="college-content">
                                {details.collegeLogo && (
                                    <img
                                        src={details.collegeLogo}
                                        className="college-logo"
                                        alt="College Logo"
                                    />
                                )}
                                <div className="college-details">
                                    <p className='collegeDegree mt-2'>{details.collegeDegreeTitle}</p>
                                    <p className=' collegeName mb-0'>{details.collegeName}</p>
                                    <p className='collegeDate'>{details.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
