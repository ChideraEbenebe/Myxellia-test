import Image from 'next/image';
import React from 'react';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';

const Sliders = () => {
  return (
    <main className='max-w-[1284px] py-5 mx-auto'>
      <section className='grid grid-cols-3 gap-4'>
        <div className='relative image'>
          <Image
            src={image1}
            alt='first backgroud image of house'
            className='h-[286px] w-full object-cover rounded-[12px]  '
          />
          <div className='absolute left-4 bottom-5 z-10'>
            <h4 className='uppercase text-sm text-white'>most clicked</h4>
            <p className='text-white font-semibold text-[18px] '>
              Urban Prime Plaza Premiere
            </p>
          </div>
        </div>
        <div className='relative image'>
          <Image
            src={image2}
            alt='first backgroud image of house'
            className='h-[286px] w-full object-cover rounded-[12px]  '
          />
          <div className='absolute left-4 bottom-5 z-10'>
            <h4 className='uppercase text-sm text-white'>most watchedlist</h4>
            <p className='text-white font-semibold text-[18px] '>
              Urban Prime Plaza Premiere
            </p>
          </div>
        </div>
        <div className='relative image'>
          <Image
            src={image3}
            alt='first backgroud image of house'
            className='h-[286px] w-full object-cover rounded-[12px]  '
          />
          <div className='absolute left-4 bottom-5 z-10'>
            <h4 className='uppercase text-sm text-white'>hottest listings</h4>
            <p className='text-white font-semibold text-[18px] '>
              Urban Prime Plaza Premiere
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sliders;
