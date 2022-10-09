import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: 'View Books',
        path: '/view-books',
        icon: <AiIcons.AiFillBook />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subnav: [
            {
                title: 'Make Books',
                path: '/make-books',
                icon: <AiIcons.AiFillBook />,
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