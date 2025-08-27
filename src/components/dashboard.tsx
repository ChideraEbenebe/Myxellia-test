import React from 'react';
import { Chart } from './chart';
import Image from 'next/image';
import left from '@/assets/Vector (1).svg';
import right from '@/assets/Vector (2).svg';

const Dashboard = () => {
  return (
    <main className='bg-main-gray h-screen'>
      <div className='max-w-[1284px] mx-auto'>
        <h2 className='text-main-black font-semibold text-[25px] pt-3 pb-4'>
          Welcome, Ahmed
        </h2>
      </div>
      <div className='max-w-[1284px] mx-auto'>
        <div className='grid grid-cols-[857px_407px] gap-5'>
          <div className=' bg-white border border-light-gray rounded-2xl '>
            <div className='flex justify-between items-center py-4 px-5'>
              <div className=' '>
                <h4 className='text-[20px] font-semibold'>Sales Overview</h4>
                <p className='text-xs text-mid-gray pt-3'>
                  Showing overview Jan 2022 - Sep 2022
                </p>
              </div>
              <button className='w-[177px] h-[46px] rounded-[72px] border border-[#d6d6d6]'>
                View Transactions
              </button>
            </div>
            {/* charts section */}
            <div className='flex justify-end items-center my-4 border-b-light-gray border-b'>
              <ul className='text-deep-gray text-sm flex gap-3 justify-between items-center py-4 px-5'>
                <li className='px-3'>1 Week</li>
                <li className='px-3'>1 Month</li>
                <li className='font-semibold bg-main-gray px-5 py-2 rounded-[8px]'>
                  1 Year
                </li>
              </ul>
            </div>
            {/* chart */}
            <div className='grid grid-cols-2 py-4 px-5 gap-5'>
              <div className='flex items-center gap-1.5'>
                <div className='bg-main-gray rounded-full p-1'>
                  <Image
                    src={left}
                    alt='left icon'
                    className='size-2.5'
                  />
                </div>
                <Chart />
                <div className='bg-main-gray rounded-full p-1 '>
                  <Image
                    src={right}
                    alt='right icon'
                    className='size-2.5'
                  />
                </div>
              </div>
              <div>
                <div className='grid grid-cols-2'>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div>hey</div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
