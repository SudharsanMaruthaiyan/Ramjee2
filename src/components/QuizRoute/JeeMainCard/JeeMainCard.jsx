import { Tab, Tabs, TabsList,TabPanel } from "@mui/base"
import { GraduationCap,Atom } from "lucide-react"
import { coursetab1 } from "../../../assets/image"
import AllCourse from "../../Courseroute/AllCourse/AllCourse"
import PhysicsCard from "../PhysicsCard/PhysicsCard"
import MathCard from "../MathCard/MathCard"
// import PhysicsCard from "../PhysicsCard/PhysicsCard"
// import MathCard from "../MathCard/MathCard"
const JeeMainCard = () => {
  return (
    <>
        <div className="max-w-[100%]">
            <div className="w-[90%] mx-auto grid grid-cols-1 gap-5">
                <Tabs defaultValue={0} orientation="vertical">
                <div className=" pb-5">
                    <div className=" py-5 rounded-xl px-5 bg-white border-gray-200 border shadow-md">
                        <TabsList
                            className="flex  gap-5"
                            id="certi"
                        >
                            <Tab
                            slotProps={{
                                root: ({ selected, disabled }) => ({
                                className: `font-[Poppins]  ${
                                    selected ? "text-[#014BAE] " : "text-black"
                                } ${
                                    disabled
                                    ? "cursor-not-allowed opacity-50"
                                    : "cursor-pointer"
                                } text-[20px] px-2 py-0 font-semibold  flex  gap-5 items-center focus:outline-0`,
                                }),
                            }}
                            >
                            <div className=""><GraduationCap color="black"></GraduationCap></div>2018 
                            </Tab>
                            <hr />
                            <Tab
                            slotProps={{
                                root: ({ selected, disabled }) => ({
                                className: `font-[Poppins]  ${
                                    selected ? "text-[#014BAE] " : "text-black"
                                } ${
                                    disabled
                                    ? "cursor-not-allowed opacity-50"
                                    : "cursor-pointer"
                                } text-[20px] gap-5 w-full px-2 py-0 font-semibold   flex  items-center focus:outline-0`,
                                }),
                            }}
                            >
                            <div><img src={coursetab1} alt="icon" className="w-[24px]"/></div>2019 
                            </Tab>
                        </TabsList>
                    </div>
                </div>
                    <div className="">
                        <TabPanel value={0}>
                            <PhysicsCard/>
                        </TabPanel>
                        <TabPanel value={1}>
                            <MathCard/>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    </>
  )
}

export default JeeMainCard