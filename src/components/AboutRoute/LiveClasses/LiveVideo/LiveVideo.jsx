import { icon1, icon2 , icon3, icon4 } from "../../../../assets/API/Image"
import { LiveClassApi } from "../../../../assets/API/LiveClassApi"

const LiveVideo = () => {
  return (
    <>
        <div>
            <div className=" flex justify-center">
                <div className=" w-full md:w-[75%]">
                    <div className=" bg-white text-white p-2 rounded-2xl w-full">
                        <iframe height="585" width={100} src="https://www.youtube.com/embed/gsG7uj9-4Jo?si=U-yurd7aaAhe6-V4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-[100%]"></iframe>
                    </div>
                </div>
            </div>
            <div>
                <ul className=" flex items-center justify-center gap-10 py-5 flex-wrap">
                    <li className=" flex items-center justify-center bg-white shadow-lg py-4 w-fit px-5 gap-4 rounded-lg hover:scale-105 transition-all">
                        <div><img src={icon1} alt="" className="animate-bounce"/></div>
                        <h1 className=" font-bold text-base text-black font-[poppins] text-nowrap ">Audio Classes</h1>
                    </li>
                    <li className=" flex items-center justify-center bg-white shadow-lg py-4 w-fit px-5 gap-4 rounded-lg hover:scale-105 transition-all">
                        <div><img src={icon2} alt="" className="animate-bounce" /></div>
                        <h1 className=" font-bold text-base text-black font-[poppins] text-nowrap">Live Classes</h1>
                    </li>
                    <li className=" flex items-center justify-center bg-white shadow-lg py-4 w-fit px-5 gap-4 rounded-lg hover:scale-105 transition-all">
                        <div><img src={icon3} alt="" className="animate-bounce"/></div>
                        <h1 className=" font-bold text-base text-black font-[poppins] text-nowrap">Recorded Classes</h1>
                    </li>
                    <li className=" flex items-center justify-center bg-white shadow-lg py-4 w-fit px-5 gap-4 rounded-lg hover:scale-105 transition-all">
                        <div><img src={icon4} alt="" className="animate-bounce"/></div>
                        <h1 className=" font-bold text-base text-black font-[poppins] text-nowrap">Educator Classes</h1>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default LiveVideo