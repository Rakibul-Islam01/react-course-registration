import SingleCourseCart from "../SingleCourseCart/SingleCourseCart";
import PropTypes from "prop-types"


const CourseCart = ({ courses, credits, prices }) => {
    // console.log(credits)
    // const {course_name} = courses;
    // console.log(courses)
    return (
        <div className="md:w-1/4 bg-slate-200 md:ml-3 text-black rounded-sm">
            <div>
                <h3 className="text-black font-bold pl-3 border-b-8 bg-slate-100 py-3">Credit Hours Remaining: {20 - credits} Hours</h3>
            </div>
            <div>
                <h3 className="font-bold text-lg pl-3">Course Name</h3>
                <div className="">

                {
                    courses.map((course, idx) => <SingleCourseCart course={course} key={idx}></SingleCourseCart>)
                }
                </div>

            </div>
            <div className="mt-3 px-3">
                <hr className="border-black" />
                <h3 className="font-semibold py-2">Total Credit Hour: {credits} Hours</h3>
                <hr className="border-black" />
            </div>
            <div className="md:pl-3">
                <h1 className="font-bold flex justify-between pr-3"><span>Total Price:</span> <span>${prices}</span></h1>
            </div>
            <p className="text-red-400 md:pl-3 text-sm mt-4"><span className="text-black font-semibold">N.B:</span> You can enroll upto 20 credits.</p>
        </div>
    );
};


CourseCart.propTypes ={
    courses: PropTypes.array,
    credits: PropTypes.number,
    prices: PropTypes.number
}


export default CourseCart;