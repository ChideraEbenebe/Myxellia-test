'use client';

import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import left from '@/assets/arrowLeft.svg';
import right from '@/assets/arrowRight.svg';
import clsx from 'clsx';

export default function Calendar({
  func,
  nav,
}: {
  func: () => void;
  nav: boolean;
}) {
  return (
    <div
      className={clsx(
        'h-screen bg-black  text-white absolute right-0 top-[82px] z-20 w-[400px] ',
        nav ? 'flex flex-col' : 'hidden'
      )}>
      {/* Header */}
      <div className='bg-[#171717] h-[50px] px-6 flex justify-between items-center flex-shrink-0'>
        <div className='flex gap-2 items-center h-full'>
          <FaArrowLeft className='size-6 text-white' />
          <span className='text-white text-[16px] font-semibold'>Calendar</span>
        </div>
        <XIcon
          className='size-6 text-white'
          onClick={func}
        />
      </div>

      {/* Month Navigation */}
      <div className='flex justify-center items-center gap-7.5 py-6 flex-shrink-0'>
        <Image
          src={left}
          alt='left icon'
          className='size-6'
        />{' '}
        <span className='text-[16px] font-semibold'>November 2023</span>{' '}
        <Image
          src={right}
          alt='right icon'
          className='size-6'
        />
      </div>

      {/* Table Container - This will expand to fill remaining space */}
      <div className='px-6 flex-1 min-h-0 pb-6'>
        <table className='w-full border-table-border border h-full table-fixed'>
          <thead>
            <tr>
              <th className='text-[7.58px] text-table-gray py-1.5 pl-1 border border-table-border text-left w-[14.28%]'>
                SUN
              </th>
              <th className='text-[7.58px] text-table-gray py-1.5 text-left pl-1 border border-table-border w-[14.28%]'>
                MON
              </th>
              <th className='text-[7.58px] text-table-gray py-1.5 text-left pl-1 border border-table-border w-[14.28%]'>
                TUE
              </th>
              <th className='text-[7.58px] text-table-gray py-1.5 text-left pl-1 border border-table-border w-[14.28%]'>
                WED
              </th>
              <th className='text-[7.58px] text-table-gray py-1.5 text-left pl-1 border border-table-border w-[14.28%]'>
                THU
              </th>
              <th className='text-[7.58px] text-table-gray py-1.5 text-left pl-1 border border-table-border w-[14.28%]'>
                FRI
              </th>
              <th className='text-[7.58px] text-table-gray py-1.5 text-left pl-1 border border-table-border w-[14.28%]'>
                SAT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                29
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                30
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                31
              </td>
              <td className='text-[10px] text-table-gray py-1.5 pl-1 border border-table-border align-top'>
                Nov 1
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                2
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                3
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                4
              </td>
            </tr>
            <tr>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                5
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                6
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                7
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                8
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                9
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                10
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                11
              </td>
            </tr>
            <tr>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                12
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                13
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                14
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                15
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                <span className='bg-[#2525e6] rounded-full px-2 py-0.5'>
                  16
                </span>
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                17
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                18
              </td>
            </tr>
            <tr>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                19
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                20
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                21
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                22
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                23
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                24
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                25
              </td>
            </tr>
            <tr>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                26
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                27
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                28
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                29
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                30
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                31
              </td>
              <td className='text-[10px] text-table-gray py-1.5 pl-1 border border-table-border align-top'>
                Dec 1
              </td>
            </tr>
            <tr>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                2
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                3
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                4
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                5
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                6
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                7
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                8
              </td>
            </tr>
            <tr>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                9
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                10
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                11
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                12
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                13
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                14
              </td>
              <td className='text-[10px] text-table-days py-1.5 pl-1 border border-table-border align-top'>
                15
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
