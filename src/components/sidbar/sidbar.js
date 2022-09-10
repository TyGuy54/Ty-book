import {useState} from 'react';
import {SideBarData} from '../sidbar/sidbarData'
import {SubMenu} from '../sidbar/subMenu'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";


export const SideBar = () => {
  const [showSidebar, setShowSideBar] = useState(false)

    return (
        <>  
            {showSidebar ? (
            <div className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50">
              <AiIcons.AiOutlineClose onClick={() => setShowSideBar(!showSidebar)} />
            </div>
          ) : (
            <div className="fixed z-30 flex items-center cursor-pointer right-10 top-6 text-4xl text-white">
              <FaIcons.FaBars onClick={() => setShowSideBar(!showSidebar)} />
            </div>
            )}

          <div
            className={`top-0 right-0 w-[20vw] bg-[#15171c] p-5 pl-10 text-white fixed h-full z-40  ease-in-out duration-300 ${
              showSidebar ? "translate-x-0 " : "translate-x-full"
            }`}
          >
            <div className="mt-20 text-4xl font-semibold text-white">
            {SideBarData.map((item, index) =>{
                        return <SubMenu item={item} key={index} />
                      })}
            </div>
          </div>
        </>
    )
}