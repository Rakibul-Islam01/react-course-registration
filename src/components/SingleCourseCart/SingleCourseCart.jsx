
import PropTypes from "prop-types"

const SingleCourseCart = ({course}) => {
    // console.log(course.course_name)
    return (
        <div className='text-sm py-1'>
            <div className='list-decimal  pl-3 text-sky-900 font-semibold bg-brown-600 md:flex  md:justify-between'><span>{course.course_name}</span> <span className='pr-3 pl-1'>${course.price}</span></div>
        </div>
    );
};

SingleCourseCart.propTypes ={
    course: PropTypes.object
}

export default SingleCourseCart;