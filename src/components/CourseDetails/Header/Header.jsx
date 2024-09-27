import { ChevronRight } from "lucide-react";
import { coursedhead1440, coursedhead745, coursedheadmob, headerimg_ribbon, headerimg_rocket, headerimg_star, headerimg_starurn } from "../../../assets/image";

const Header = () => {
  return (
    <>
      <div className=" max-w-[100%] mx-auto mt-[80px] py-[40px]">
        <div className="w-[100%] grid grid-cols-1 mx-auto">
          <img src={coursedhead745} alt="" className="hidden md:block xl:hidden" />
          <img src={coursedhead1440} alt="" className="hidden xl:block" />
          <img src={coursedheadmob} alt="" className=" md:hidden xl:hidden" />
        </div>
      </div>
    </>
  );
};

export default Header;
