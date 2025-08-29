import Image from 'next/image';
import React from 'react';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';

const Sliders = () => {
  return (
    <main className='max-w-7xl py-5 mx-auto px-4 sm:px-6 lg:px-8'>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='relative image'>
          <div className='h-72'>
            <Image
              src={image1}
              alt='first backgroud image of house'
              className='w-full h-full object-cover rounded-[12px]'
            />
          </div>
          <div className='absolute left-4 bottom-5 z-10'>
            <h4 className='uppercase text-sm text-white'>most clicked</h4>
            <p className='text-white font-semibold text-[18px] '>
              Urban Prime Plaza Premiere
            </p>
          </div>
          <div className='absolute left-[50%] translate-x-[-50%] bottom-3 z-10 flex gap-3'>
            <div className='rounded-full bg-white h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
          </div>
        </div>
        <div className='relative image'>
          <div className='h-72'>
            <Image
              src={image2}
              alt='second backgroud image of house'
              className='w-full h-full object-cover rounded-[12px]'
            />
          </div>
          <div className='absolute left-4 bottom-5 z-10'>
            <h4 className='uppercase text-sm text-white'>most watchedlist</h4>
            <p className='text-white font-semibold text-[18px] '>
              Urban Prime Plaza Premiere
            </p>
          </div>
          <div className='absolute left-[50%] translate-x-[-50%] bottom-3 z-10 flex gap-3'>
            <div className='rounded-full bg-white h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
          </div>
        </div>
        <div className='relative image'>
          <div className=''>
            <Image
              src={image3}
              alt='Third backgroud image of house'
              width={120}
              height={120}
              className='w-full h-full object-cover rounded-[12px]'
            />
          </div>
          <div className='absolute left-4 bottom-5 z-10'>
            <h4 className='uppercase text-sm text-white'>hottest listings</h4>
            <p className='text-white font-semibold text-[18px] '>
              Urban Prime Plaza Premiere
            </p>
          </div>
          <div className='absolute left-[50%] translate-x-[-50%] bottom-3 z-10 flex gap-3'>
            <div className='rounded-full bg-white h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
            <div className='rounded-full bg-gradient-to-br from-deep-gray to-mid-gray h-1.5 w-1.5'></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sliders;
