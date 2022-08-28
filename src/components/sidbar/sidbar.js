import React from 'react';

const SideBarIcon = ({title}) => (
  <>
      <div className="sidenav-icon">
        <div className="font-bold">
            {title}
        </div>
      </div>
  </>
)

export const SideBar = () => {
    return (
        <>  
          <div className="fixed top-0 left-0 h-screen w-60 m-0
                            flex flex-col
                            bg-gray-900 text-white shadow-lg">
                                
            <SideBarIcon title="Home"/>
            <SideBarIcon title="Books"/>
            <SideBarIcon title="Pages"/>
            <SideBarIcon title="Other"/>
          </div>
        </>
    )
}