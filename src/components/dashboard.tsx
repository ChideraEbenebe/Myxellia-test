import React from 'react';
import { Chart } from './chart';
import Image from 'next/image';
import left from '@/assets/Vector (1).svg';
import right from '@/assets/Vector (2).svg';
import { TbCurrencyNaira } from 'react-icons/tb';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import home from '@/assets/solar_home-linear.svg';
import profile from '@/assets/profile.svg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Sliders from '@/components/Sliders';

const Dashboard = () => {
  return (
    <main className='bg-main-gray '>
      <div className='max-w-[1284px] mx-auto'>
        <h2 className='text-main-black font-semibold text-[25px] pt-5 pb-5'>
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
            <div className='flex justify-end items-center  border-b-light-gray border-b'>
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
              <div className='flex flex-col gap-3.5'>
                <div className='grid grid-cols-2'>
                  {/* total inflow */}
                  <div className='w-[189px] h-[73px] border-light-gray border px-2.5 py-2.5 rounded-2xl flex flex-col justify-between'>
                    <h5 className='flex items-center text-chart-purple font-semibold gap-0'>
                      <TbCurrencyNaira className='size-[19px] text-[19px]' />
                      <span className=' text-[19px]'>120,000,000.00</span>
                    </h5>
                    <div className='text-[10px] flex items-center gap-1'>
                      <p>Total Inflow</p>
                      <p className='flex items-center gap-0.5 text-chart-mrr'>
                        <FaArrowCircleUp className='size-2.5' />
                        <span>2.5%</span>
                      </p>
                    </div>
                  </div>

                  {/* marginal revenue */}
                  <div className='w-[189px] h-[73px] border-light-gray border px-2.5 py-2.5 rounded-2xl flex flex-col justify-between'>
                    <h5 className='flex items-center text-chart-mrr font-semibold gap-0'>
                      <TbCurrencyNaira className='size-[19px] text-[19px]' />
                      <span className=' text-[19px]'>50,000,000.00</span>
                    </h5>
                    <div className='text-[10px] flex items-center gap-2'>
                      <p>MRR</p>
                      <p className='flex items-center gap-0.5 text-chart-mrr'>
                        <FaArrowCircleUp className='size-2.5' />
                        <span>2.5%</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  {/* commision revenue */}
                  <div className='w-[189px] h-[73px] border-light-gray border px-2.5 py-2.5 rounded-2xl flex flex-col justify-between'>
                    <h5 className='flex items-center text-chart-cr font-semibold gap-0'>
                      <TbCurrencyNaira className='size-[19px] text-[19px]' />
                      <span className=' text-[19px]'>200,000,000.00</span>
                    </h5>
                    <div className='text-[10px] flex items-center gap-1'>
                      <p>Commission Revenue</p>
                      <p className='flex items-center gap-o.5 text-chart-cr'>
                        <FaArrowCircleDown className='size-2.5' />
                        <span>0.5%</span>
                      </p>
                    </div>
                  </div>
                  <div className='w-[189px] h-[73px] border-light-gray border px-2.5 py-2.5 rounded-2xl flex flex-col justify-between'>
                    <h5 className='flex items-center text-chart-gmv font-semibold gap-0'>
                      <TbCurrencyNaira className='size-[19px] text-[19px]' />
                      <span className=' text-[19px]'>100,000,000.00</span>
                    </h5>
                    <div className='text-[10px] flex items-center gap-1'>
                      <p>GMV</p>
                      <p className='flex items-center gap-0.5 text-chart-gmv'>
                        <FaArrowCircleDown className='size-2.5' />
                        <span>0.5%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-rows-2 gap-3'>
            <div className='border border-light-gray rounded-2xl h-full bg-white'>
              <div className='h-[56px] w-full bg-main-gray flex px-4 py-2 items-center justify-between rounded-t-2xl rounded-tl-2xl'>
                <div className='flex gap-2'>
                  <Image
                    src={home}
                    alt='Home icon'
                    className='size-5'
                  />
                  <span className='text-sm tracking-wide text-listings-gray'>
                    Listings Overview
                  </span>
                </div>
                <div className='text-chart-purple flex items-center gap-1'>
                  <span className='text-xs'>View all</span>
                  <MdOutlineKeyboardArrowRight className='size-4.5' />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-2 h-[115px] p-3'>
                <div className='flex flex-col px-4 justify-center space-y-3'>
                  <h6 className='text-deep-gray text-sm'>Total</h6>
                  <p className='font-semibold text-main-black text-2xl'>1.8k</p>
                </div>

                <div className='flex flex-col px-4 justify-center space-y-3'>
                  <h6 className='text-deep-gray text-sm'>Active</h6>
                  <p className='font-semibold text-main-black text-2xl'>80</p>
                </div>

                <div className='flex flex-col px-4 justify-center space-y-3'>
                  <h6 className='text-deep-gray text-sm'>Archive</h6>
                  <p className='font-semibold text-main-black text-2xl'>1k</p>
                </div>
              </div>
            </div>
            <div className='border border-light-gray rounded-2xl h-full bg-white'>
              <div className='h-[56px] w-full bg-main-gray flex px-4 py-2 items-center justify-between rounded-t-2xl rounded-tl-2xl'>
                <div className='flex gap-2'>
                  <Image
                    src={profile}
                    alt='Home icon'
                    className='size-5'
                  />
                  <span className='text-sm tracking-wide text-listings-gray'>
                    Users Overview
                  </span>
                </div>
                <div className='text-chart-purple flex items-center gap-1'>
                  <span className='text-xs'>View all</span>
                  <MdOutlineKeyboardArrowRight className='size-4.5' />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-2 h-[115px] p-3'>
                <div className='flex flex-col px-4 justify-center space-y-3'>
                  <h6 className='text-deep-gray text-sm'>Total</h6>
                  <p className='font-semibold text-main-black text-2xl'>
                    20.7k
                  </p>
                </div>

                <div className='flex flex-col px-4 justify-center space-y-3'>
                  <h6 className='text-deep-gray text-sm'>Riders</h6>
                  <p className='font-semibold text-main-black text-2xl'>8.5k</p>
                </div>

                <div className='flex flex-col px-4 justify-center space-y-3'>
                  <h6 className='text-deep-gray text-sm'>Subscribers</h6>
                  <p className='font-semibold text-main-black text-2xl'>7.5k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sliders />
    </main>
  );
};

export default Dashboard;
