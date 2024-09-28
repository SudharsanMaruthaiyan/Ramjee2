
import {Atom, } from "lucide-react"
import { Link } from "react-router-dom"

const PhysicsCard = () => {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <div className="border-2 pt-8 pb-5 px-3 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all hover:shadow-lg">
                <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition group">
                    <div className="">
                        <Atom className=" group-hover:stroke-white"/>
                    </div>
                </div>
                
                <div>
                    <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Physics</p>
                </div>
                <div>
                    <p className="font-[Poppins] text-gray-600 ">Penatibus Et Magnis Dis<br /> Parturient</p>
                </div>
                <div className=" py-3">
                    <Link to={"/jeedetails"}>
                        <Link to={"/jeedetails"}>
                        <button className=" font-bold font-[poppins] p-3 px-6 hover:bg-[#014BAE] border-[#014BAE] border rounded-full hover:text-white">Start Now</button>
                    </Link>
                    </Link>
                </div>
            </div>
            <div className="border-2 pt-8 pb-5 px-3 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all hover:shadow-lg">
                
                <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition group">
                    <div className="">
                        <Atom className=" group-hover:stroke-white"/>
                    </div>
                </div>
                
                <div>
                    <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Maths</p>
                </div>
                <div>
                    <p className="font-[Poppins] text-gray-600 ">Penatibus Et Magnis Dis<br /> Parturient</p>
                </div>
                <div className=" py-3">
                    <Link to={"/jeedetails"}>
                        <button className=" font-bold font-[poppins] p-3 px-6 hover:bg-[#014BAE] border-[#014BAE] border rounded-full hover:text-white">Start Now</button>
                    </Link>
                </div>
            </div>
            <div className="border-2 pt-8 pb-5 px-3 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all hover:shadow-lg">
                
                <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition group">
                    <div className="">
                        <Atom className=" group-hover:stroke-white"/>
                    </div>
                </div>
                
                <div>
                    <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Physics</p>
                </div>
                <div>
                    <p className="font-[Poppins] text-gray-600 ">Penatibus Et Magnis Dis<br /> Parturient</p>
                </div>
                <div className=" py-3">
                    <Link to={"/jeedetails"}>
                        <button className=" font-bold font-[poppins] p-3 px-6 hover:bg-[#014BAE] border-[#014BAE] border rounded-full hover:text-white">Start Now</button>
                    </Link>
                </div>
            </div>
            <div className="border-2 pt-8 pb-5 px-3 flex justify-center gap-4 flex-col items-center relative rounded-lg hover:rounded-tr-[80px] hover:border-[#014BAE] transition-all hover:shadow-lg">
                
                <div className="rounded-full fill-white bg-[#E5F9F9] p-5 group hover:bg-[#014BAE] transition group">
                    <div className="">
                        <Atom className=" group-hover:stroke-white"/>
                    </div>
                </div>
                
                <div>
                    <p className="font-[Poppins] text-[18px] lg:text-[24px] text-[#222]">Maths</p>
                </div>
                <div>
                    <p className="font-[Poppins] text-gray-600 ">Penatibus Et Magnis Dis<br /> Parturient</p>
                </div>
                <div className=" py-3">
                    <Link to={"/jeedetails"}>
                        <button className=" font-bold font-[poppins] p-3 px-6 hover:bg-[#014BAE] border-[#014BAE] border rounded-full hover:text-white">Start Now</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default PhysicsCard