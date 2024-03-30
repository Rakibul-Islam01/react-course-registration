import PropTypes from "prop-types"
import { ToastContainer } from "react-toastify";

const Course = ({ course, handleAddToCourses }) => {
    // console.log(course)
    const { course_name, credit, details, image, price } = course;
    // console.log(image)
    return (
        <div className="mx-auto mb-3">
            <div className="card w-full md:w-60 h-full mx-auto bg-white p-4 shadow-xl">
                <div>
                    <img src={image} alt="vvv" />
                </div>
                <h3 className="mt-2 font-bold text-black">{course_name}</h3>
                <p className="text-black mt-3 text-justify text-sm">{details}</p>
                <div className="mt-auto">
                    <span className="mt-3">$ Price: {price}</span>
                    <span> Credit: {credit}</span>
                </div>
                <div>
                    <button onClick={()=> handleAddToCourses(course, credit, price)}  className="bg-blue-600 hover:bg-blue-800 transition-opacity w-full p-2 text-white rounded text-xl uppercase mt-2">select</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object,
    handleAddToCourses: PropTypes.func
}

export default Course;