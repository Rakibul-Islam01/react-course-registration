import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types"


const Courses = ({handleAddToCourses}) => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="w-full md:w-3/4 bg-slate-300 rounded-sm">
            <h3 className="text-2xl text-black font-bold md:pt-4 text-center border-b-2 py-3"> Total Courses Found: {courses.length}</h3>
            <div className="md:flex flex-wrap gap-3 p-6 mx-auto">
                {
                    courses.map((course, idx) => <Course key={idx} course={course}handleAddToCourses={handleAddToCourses} ></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes ={
    handleAddToCourses : PropTypes.func
}

export default Courses;