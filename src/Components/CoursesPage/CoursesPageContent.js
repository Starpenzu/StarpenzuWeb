import React from 'react';

export default function CoursesPageContent({ courses }) {
    const [openAccordions, setOpenAccordions] = React.useState([]);

    function handleAccordion(index) {
        setOpenAccordions((prevAccordions) => {
            if (prevAccordions.includes(index)) {
                return prevAccordions.filter((accordion) => accordion !== index);
            } else {
                return [...prevAccordions, index];
            }
        });
    }

    return (
        <>
            {courses.map((course, index) => (
                <div className={openAccordions.includes(index) ? 'xxxx' : 'jjj'} key={index}>
                    <div className={openAccordions.includes(index) ? 'ssss' : 'CoursesPageContent'}>
                        <div className="CoursesPageContenttext" onClick={() => handleAccordion(index)}>
                            {course.title}
                        </div>
                        <img className="force" id={openAccordions.includes(index) ? 'makewhite' : ''} src={openAccordions.includes(index) ? course.img2 : course.img} alt="" onClick={() => handleAccordion(index)} />
                    </div>

                    {openAccordions.includes(index) && (
                        <div className="accordionContents">
                            {course.stages.map((stage, stageIndex) => (
                                <div className="accordionContentsLists" key={stageIndex}>
                                    <div>{stage}</div>
                                    {course.locked && <img src={course.imgLock} alt="" />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
