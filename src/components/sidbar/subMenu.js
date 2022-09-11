import {useState} from 'react'
import { Link } from 'react-router-dom';

export const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <Link
            className="flex text-[#e1e9fc] justify-between content-center 
                        p-[20px] list-none h-[80px] text-[18px] 
                        hover:bg-[#252831] hover:border-[#632ce4] hover:border-l-4 border-solid cursor-pointer" 
            to={item.path}
            onClick={item.subNav && showSubnav}
        >
          <div className="inline-flex">
            {item.icon} 
            <div className="ml-[16px]">{item.title}</div>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </Link>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <div 
                // to={item.path} 
                // key={index}
                className="bg-[#414757] h-[90px] pl-[3rem] 
                            flex content-center text-[#f5f5f5] text-[18px]"
                >
                {item.icon}
                <div
                    className="ml-[16px]"
                > 
                    {item.title}
                </div>
              </div>
            );
          })}
      </>
    );
  };