'use client';

import React, { useState } from 'react';
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
import trendUp from '@/assets/trend-up.svg';
import settings from '@/assets/setting-4.svg';
import bar from '@/assets/bar.svg';
import Image from 'next/image';
import modalImage from '@/assets/media.png';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import Calendar from './calendar';
import clsx from 'clsx';

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  function changeNav() {
    setNav((prev) => !prev);
  }
  return (
    <nav>
      {/* first layer */}
      <div className='bg-main-black h-20 relative overflow-x-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full '>
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

              <Dialog>
                <DialogTrigger asChild>
                  <Image
                    width={32}
                    height={32}
                    src={calculator}
                    alt='calendar icon'
                    className='size-8'
                  />
                </DialogTrigger>
                <DialogContent
                  className='w-full max-w-md p-0 rounded-[10px]'
                  showCloseButton={false}>
                  <DialogHeader className='p-0'>
                    <DialogTitle>
                      <Image
                        src={modalImage}
                        alt='bg image of the modal'
                        className='w-full full object-cover rounded-t-[10px] rounded-tl-[10px]'
                      />
                    </DialogTitle>
                  </DialogHeader>
                  <div>
                    <div className='max-w-sm mx-auto h-full space-y-6 py-6'>
                      <div className='flex gap-3 items-center'>
                        <Image
                          src={settings}
                          alt='settings icon'
                          className='size-6'
                        />
                        <div>
                          <h4 className='font-bold text-[16px] text-main-black'>
                            Set up annual budgets by account category
                          </h4>
                          <p className='text-mid-gray text-xs '>
                            Allocate funds across income and expense lines with
                            full visibility.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-3 items-center'>
                        <Image
                          src={trendUp}
                          alt='trend icon'
                          className='size-6'
                        />
                        <div>
                          <h4 className='font-bold text-[16px] text-main-black'>
                            Track actuals vs budget in real time
                          </h4>
                          <p className='text-mid-gray text-xs '>
                            See how your community is performing against plan,
                            month by month.
                          </p>
                        </div>
                      </div>
                      <div className='flex gap-3 items-center'>
                        <Image
                          src={bar}
                          alt='bar icon'
                          className='size-6'
                        />
                        <div>
                          <h4 className='font-bold text-[16px] text-main-black'>
                            Adjust figures and forecast with ease
                          </h4>
                          <p className='text-mid-gray text-xs '>
                            Edit amounts, apply percentage changes, or roll
                            forward last year’s data—all in one place.
                          </p>
                        </div>
                      </div>
                      <button className='w-full bg-main-black text-center py-3 rounded-3xl text-white text-[16px]'>
                        Create Budget
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Image
                width={32}
                height={32}
                src={calendar}
                alt='calendar icon'
                className='size-8'
                onClick={changeNav}
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
      <div className='bg-white h-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full'>
          <div className='bg-main-gray px-6 h-10 rounded-sm flex gap-2 items-center text-main-black'>
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
              className='bg-light-gray w-full max-w-xs h-11 rounded-[10px] py-3.5 pl-12 placeholder:text-deep-gray border border-main-gray'
            />
          </div>
        </div>
      </div>
      {nav && (
        <div
          className='fixed inset-0 z-10'
          onClick={changeNav}
        />
      )}

      <Calendar
        func={changeNav}
        nav={nav}
      />
    </nav>
  );
};

export default Navbar;
