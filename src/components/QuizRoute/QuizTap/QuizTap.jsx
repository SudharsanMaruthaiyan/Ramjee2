import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import { ChevronRight, GraduationCap } from "lucide-react";
import { coursetab1, coursetab2, coursetab3, coursetab4, coursetab5, coursetab6, navlogo } from "../../../assets/image";
import AllCourse from "../../Courseroute/AllCourse/AllCourse";
import ArtDevelop from "../../Courseroute/ArtDevelop/ArtDevelop";
import JeeMainCard from "../JeeMainCard/JeeMainCard";
import PhysicsCard from "../PhysicsCard/PhysicsCard";

export default function QuizTap() {
    return (
      <>
        <div className="max-w-[100%] mx-auto py-[20px] lg:py-[50px] my-[50px]">
          <div className="w-[90%] mx-auto grid grid-cols-1 ">
            <Tabs defaultValue={0} orientation="vertical">
              <div className=" grid grid-cols-4 gap-14 h-fit">
                <div className="h-fit col-span-4 md:col-span-2 lg:col-span-1 border shadow-lg py-5 px-2 rounded-xl">
                  <TabsList
                    className="w-[100%] flex flex-col gap-5 py-7 px-3 bg-white rounded-lg"
                    id="certi"
                  >
                    <div className=" flex items-center justify-center pb-3">
                        <img src={navlogo} alt="Ramjee" width={150}/>
                    </div>

                    <Tab
                      slotProps={{
                        root: ({ selected, disabled }) => ({
                          className: `font-[Poppins]  ${
                            selected ? "text-[#014BAE] " : "text-black"
                          } ${
                            disabled
                              ? "cursor-not-allowed opacity-50"
                              : "cursor-pointer"
                          } text-[20px] w-full px-2 py-0 font-semibold  flex  gap-5 items-center focus:outline-0`,
                        }),
                      }}
                    >
                     <div className=""><GraduationCap color="black"></GraduationCap></div>JEE MAIN
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
                      <div><img src={coursetab1} alt="" className="w-[24px]"/></div> JEE ADVANCED 
                    </Tab>
                  </TabsList>
                </div>
  
                <div className="col-span-4 md:col-span-2 lg:col-span-3">
                    
                    <TabPanel value={0}>
                        <JeeMainCard/>
                    </TabPanel>
                    <TabPanel value={1}>
                        <JeeMainCard/>
                    </TabPanel>
                    <TabPanel value={2}>
                        <PhysicsCard/>
                    </TabPanel>
                    <TabPanel value={3}>
                        <PhysicsCard/>
                    </TabPanel>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </>
    );
  }