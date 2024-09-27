import { ArrowRight } from "lucide-react";
import { pop1, pop2, pop4} from "../../../assets/image";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "../../Navbar/Navbar";
const PhysicDetailPage = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <Navbar/>
            <AnimatedCursor  innerSize={10}
                outerSize={10}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
            ]}/>
            <div className=" w-[90%] mx-auto">
                <div className=" pt-20">
                    <h1 className=" font-bold font-[poppins] pt-8 text-[34px]">Physics</h1>
                    <div className=" flex items-center gap-2">
                        <p className=" font-[poppins] text-base">32 Chapters</p>
                        <p className=" font-[poppins] text-base">5402 Questions</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 mx-auto py-[30px] gap-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center overflow-hidden hover:-translate-y-2">
                            <div>
                                <img src={pop1} alt="" />
                            </div>
                            <div>
                                <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                                <p className="font-[Poppins] text-base text-center">15 Courses</p>
                            </div>
                        </div>
                        <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center hover:-translate-y-2">
                            <div>
                                <img src={pop2} alt="" />
                            </div>
                            <div>
                                <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                                <p className="font-[Poppins] text-base text-center">15 Courses</p>
                            </div>
                        </div>
                        <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center hover:-translate-y-2">
                        <div>
                            <img src={pop4} alt="" />
                        </div>
                        <div>
                            <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                            <p className="font-[Poppins] text-base text-center">15 Courses</p>
                        </div>
                        </div>
                        <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center hover:-translate-y-2">
                        <div>
                            <img src={pop4} alt="" />
                        </div>
                        <div>
                            <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                            <p className="font-[Poppins] text-base text-center">15 Courses</p>
                        </div>
                        </div>
                        <div className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center hover:-translate-y-2">
                        <div>
                            <img src={pop1} alt="" />
                        </div>
                        <div>
                            <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                            <p className="font-[Poppins] text-base text-center">15 Courses</p>
                        </div>
                        </div>
                        <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center hover:-translate-y-2">
                        <div>
                            <img src={pop2} alt="" />
                        </div>
                        <div>
                            <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                            <p className="font-[Poppins] text-base text-center">15 Courses</p>
                        </div>
                        </div>
                        <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center hover:-translate-y-2">
                        <div>
                            <img src={pop4} alt="" />
                        </div>
                        <div>
                            <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                            <p className="font-[Poppins] text-base text-center">15 Courses</p>
                        </div>
                        </div>
                        <div  className="pl-5 pr-7 py-10 flex flex-col gap-5 border-2 rounded-lg hover:shadow-[0px_30px_50px_0px_#000f381a] hover:border-t-blue-700 hover:border-t-2 transition items-center hover:-translate-y-2">
                        <div>
                            <img src={pop4} alt="" />
                        </div>
                        <div>
                            <p className="font-[Poppins] text-[18px] font-medium text-center">Art & Design</p>
                            <p className="font-[Poppins] text-base text-center">15 Courses</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default PhysicDetailPage