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
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subnav: [
            {
                title: 'Make Book',
                path: '/home/make-book',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Make Page',
                path: '/home/make-page',
                icon: <IoIcons.IoIosPaper />
            }
        ]
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
                path: '/pages',
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