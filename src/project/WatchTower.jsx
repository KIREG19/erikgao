/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import watchTowerGif from '../assets/WatchTower.gif';

function WatchTower({ variants, techStack }) {
  const title = 'flex items-center gap-12 <md:(flex-col text-center gap-5)';
  const watchTower = [
    'TypeScript',
    'React',
    'Node.js',
    'AWS DynamoDB',
    'AWS Bedrock',
    'MongoDB',
  ];

  const ToWatchTower = () => {
    window.open('https://github.com/oslabs-beta/watchtower', '_blank');
  };

  return (
    <motion.div
      className='flex flex-1 max-w-1600px items-center gap-12 mt-25 mb-10 <md:w-full'
      variants={variants}
    >
      <img
        className='w-700px h-450px object-fill rounded-xl'
        src={watchTowerGif}
        alt='WatchTower'
      />
      <div className='flex flex-col justify-center gap-5'>
        <div className={title}>
          <h1 className='text-60px font-thin <md:text-36px'>
            <motion.b whileHover={{ color: 'orange' }}>WatchTower</motion.b>
          </h1>
        </div>
        <motion.h1 className='text-xl' whileHover={{ color: 'orange' }}>
          An observation tool to visualize provisioned and consumed levels
          <br />
          in AWS DynamoDB for read and write capacity, integrating
          <br />
          with AWS Bedrock generative AI for usage insights.
        </motion.h1>
        <div className='flex gap-2 text-lg'>
          {watchTower.map((item, i) => (
            <span key={i} className={techStack}>
              {item}
            </span>
          ))}
        </div>
        <button
          className='w-150px h-60px rounded-50px bg-orange-400 text-white border-none text-24px cursor-pointer <md:(w-210px h-60px text-16px bg-transparent border border-orange-400 text-orange-400)'
          onClick={ToWatchTower}
        >
          Check it out!
        </button>
      </div>
    </motion.div>
  );
}

export default WatchTower;
