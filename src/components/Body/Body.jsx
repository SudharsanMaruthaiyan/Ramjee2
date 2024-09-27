import ChooseUs from "../ChooseUs/ChooseUs"
import CourseSection from "../CourseSection/CourseSection"
import ReviewSection from "../ReviewSection/ReviewSection"
import Counter from "./Counter/Counter"
import EchoolingCourses from "./EchoolingCourses/EchoolingCourses"
import Homepage from "./Homepage/Homepage"
import SearchNav from "./SearchNav/SearchNav"
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent"

const Body = () => {
  return (
    <>  
        <Homepage/>
        <Counter></Counter>
        <EchoolingCourses></EchoolingCourses>
        <UpcomingEvent/>
        <ChooseUs></ChooseUs>
        <CourseSection></CourseSection>
        <ReviewSection></ReviewSection>
        <SearchNav/>
    </>
  )
}

export default Body