import React from 'react'
import { coursehead1440, coursehead745, courseheadmob } from '../../../assets/image'

const Header = () => {
  return (
    <>
     <div className=" max-w-[100%] mx-auto mt-[80px] py-[40px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
          <img src={coursehead745} alt="" className="hidden md:block xl:hidden" />
          <img src={coursehead1440} alt="" className="hidden xl:block" />
          <img src={courseheadmob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div> 
    </>
  )
}

export default Header
