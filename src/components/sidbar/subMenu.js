import {useState} from 'react'

export const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <div 
            className="flex text-[#e1e9fc] justify-between content-center 
                        p-[20px] list-none h-[60px] text-[18px]" 
            onClick={item.subNav && showSubnav}
        >
          <div>
            {item.icon}
            <div
                className="ml-[16px]"
            >
                {item.title}
            </div>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </div>
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