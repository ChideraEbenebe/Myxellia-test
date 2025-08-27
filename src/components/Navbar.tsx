import React from 'react';
import logo from '@/assets/Myxellia logo.svg';
import bell from '@/assets/Vector.svg';
import calculator from '@/assets/calculator.svg';
import calendar from '@/assets/calendar.svg';
import message from '@/assets/message-notif.svg';
import initials from '@/assets/Component 15.svg';
import home from '@/assets/Home 1.svg';
import toolbox from '@/assets/Toolbox.svg';
import profile from '@/assets/Profile 1.svg';
import article from '@/assets/Article.svg';
import scroll from '@/assets/Scroll.svg';
import search from '@/assets/Search 1.svg';
import Image from 'next/image';
import { FaBell } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { TbCalculatorFilled, TbMessageFilled } from 'react-icons/tb';

const navLinks = [
  {
    icon: <FaBell size={26} />,
  },
  {
    icon: <TbCalculatorFilled size={26} />,
  },
  { icon: <FaCalendarDays size={26} /> },
  { icon: <TbMessageFilled size={26} /> },
];

const Navbar = () => {
  return (
    <nav>
      {/* first layer */}
      <div className='bg-main-black h-[82px]'>
        <div className='max-w-[1284px] mx-auto flex justify-between items-center h-full '>
          <Image
            src={logo}
            alt='Myxellia Logo'
          />

          <div>
            <ul className='flex text-white justify-between items-center gap-[25px]'>
              <Image
                width={32}
                height={32}
                src={bell}
                alt='bell icon'
                className='size-8'
              />
              <Image
                width={32}
                height={32}
                src={calculator}
                alt='bugeting icon'
                className='size-8'
              />
              <Image
                width={32}
                height={32}
                src={calendar}
                alt='calendar icon'
                className='size-8'
              />
              <Image
                width={32}
                height={32}
                src={message}
                alt='message icon'
                className='size-8'
              />
              <Image
                width={32}
                height={32}
                src={initials}
                alt='user initials'
                className='size-10'
              />
            </ul>
          </div>
        </div>
      </div>

      {/* second layer */}
      <div className='bg-white h-[67px]'>
        <div className='max-w-[1284px] mx-auto flex justify-between items-center h-full'>
          <div className='bg-main-gray px-[24.695px] h-[38px] rounded-sm flex gap-2 items-center text-main-black'>
            <Image
              className='size-6'
              src={home}
              alt='home icon'
            />
            <h4 className='text-sm font-semibold'>Dashboard</h4>
          </div>
          <div className='flex gap-2 items-center text-deep-gray '>
            <Image
              className='size-6'
              src={toolbox}
              alt='toolbox icon'
            />
            <h4 className='text-sm'>Listings</h4>
          </div>
          <div className='flex gap-2 items-center text-deep-gray'>
            <Image
              className='size-6'
              src={profile}
              alt='profile icon'
            />
            <h4 className='text-sm '>Users</h4>
          </div>
          <div className='flex gap-2 items-center text-deep-gray'>
            <Image
              className='size-6'
              src={article}
              alt='article icon'
            />
            <h4 className='text-sm'>Requests</h4>
          </div>
          <div className='flex gap-2 items-center text-deep-gray'>
            <Image
              className='size-6'
              src={scroll}
              alt='scroll icon'
            />
            <h4 className='text-sm '>Applications</h4>
          </div>
          {/* searchbar */}
          <div className='flex gap-2 items-center relative'>
            <Image
              src={search}
              alt='search icon'
              width={24}
              height={24}
              className='size-6 absolute left-4'
            />
            <input
              type='text'
              placeholder='Search listings, users here...'
              className='bg-light-gray w-[319px] h-[43px]  rounded-[10px] py-3.5 pl-12 placeholder:text-deep-gray border border-main-gray'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
