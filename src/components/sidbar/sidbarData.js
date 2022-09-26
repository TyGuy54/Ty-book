import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

// make a function the returns the contents the database from Rust
const getDatabase = () => {
    // invoke a function from rust that retuens the data 
}

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Books',
        path: '/books',
        icon: <AiIcons.AiFillBook />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subnav: 
        [
            {
                title: 'Pages',
                path: '/books/pages',
                icon: <AiIcons.AiFillCopy />,
            }
        ]
    },
    {
        title: 'Documentaion',
        path: '/documentaion',
        icon: <AiIcons.AiFillBook />,
    },
    {
        title: 'Info',
        path: '/info',
        icon: <AiIcons.AiFillBook />,
    },

]