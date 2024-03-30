import { useState } from "react"
import CourseCart from "./components/CourseCart/CourseCart"
import Courses from "./components/Courses/Courses"
import Header from "./components/Header/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [courses, setCourses] = useState([])
  const [credits, setCredits] = useState(0)
  const [prices, setPrices] = useState(0)

  const handleAddToCourses = (course, credit, price) => {

    if (courses.includes(course)) {
      toast('This course is already in your cart.');
      return;
    } else {
      
      // Add credits upto 20
      const newCredits = credits + credit;
      if (newCredits > 20) {
        // Show an alert if credits exceed 20
        toast('You cannot add more than 20 credits.');
        return;
      } else {
        // Increment credits
        setCredits(newCredits)

        // Add the course to the cart
        const newCourses = [...courses, course]
        setCourses(newCourses)

        // Add prices 
        const newPrices = prices + price;
        setPrices(newPrices)
      }

    }


  }


  return (
    <>
      <div className="bg-white">
        <Header></Header>
        <div className="md:flex mx-16">
          <Courses handleAddToCourses={handleAddToCourses}></Courses>
          <CourseCart courses={courses} credits={credits} prices={prices}></CourseCart>
        </div>
      </div>

    </>
  )
}

export default App
