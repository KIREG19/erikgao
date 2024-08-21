/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import Syncify from '../assets/Syncify.png';
import Job_Hub from '../assets/Job_Hub.png';
import Bill_Tracker from '../assets/Bill_Tracker.png';
import Petder_Better from '../assets/Petder_Better.png';

function SideProject({ variants, techStack }) {
  const image = 'w-360px h-200px object-fill rounded-lg';
  const box =
    'p-12 border border-gray-200 flex flex-col justify-between gap-3 <md:(border-none items-center gap-5 p-4)';
  const button =
    'p-2 bg-orange-400 text-white border-none cursor-pointer <md:(bg-transparent border border-orange-400 text-orange-400 rounded-sm w-1/2 p-1)';
  const boxHover = { background: 'lightgray', color: 'black' };
  const syncify = ['JavaScript', 'React', 'Node.js', 'OAuth 2.0'];
  const jobHub = ['JavaScript', 'React', 'PostgreSQL', 'Jest'];
  const petderBetter = ['JavaScript', 'React', 'Redux', 'Microsoft Azure SQL'];
  const billTracker = ['JavaScript', 'Redux', 'HTML', 'CSS'];

  const ToBillTracker = () => {
    window.open('https://github.com/KIREG19/bill-tracker', '_blank');
  };

  const ToPetderBetter = () => {
    window.open('https://github.com/awesome-solution/petder-better', '_blank');
  };

  const ToJobHub = () => {
    window.open('https://github.com/awesome-panda-whale/job-hub', '_blank');
  };

  const ToSyncify = () => {
    window.open(
      'https://github.com/team-squirtle-reinforcement/MusicConverter',
      '_blank'
    );
  };

  return (
    <motion.div
      className='flex flex-1 max-w-1800px mx-auto <md:(flex-col w-full)'
      variants={variants}
    >
      <motion.div className={box} whileHover={boxHover}>
        <img className={image} src={Syncify} alt='Syncify' />
        <h2>Syncify</h2>
        <p>Transfer Playlist from Spotify to Youtube</p>
        <div className='flex gap-2 text-lg'>
          {syncify.map((item, i) => (
            <span key={i} className={techStack}>
              {item}
            </span>
          ))}
        </div>
        <button className={button} onClick={ToSyncify}>
          Github
        </button>
      </motion.div>
      <motion.div className={box} whileHover={boxHover}>
        <img className={image} src={Job_Hub} alt='Job Hub' />
        <h2>Job Hub</h2>
        <p>Job Search Tracking Web Application</p>
        <div className='flex gap-2 text-lg'>
          {jobHub.map((item, i) => (
            <span key={i} className={techStack}>
              {item}
            </span>
          ))}
        </div>
        <button className={button} onClick={ToJobHub}>
          Github
        </button>
      </motion.div>
      <motion.div className={box} whileHover={boxHover}>
        <img className={image} src={Petder_Better} alt='Petder Better' />
        <h2>Petder Better</h2>
        <p>Pet Dating Web Application</p>
        <div className='flex gap-2 text-lg'>
          {petderBetter.map((item, i) => (
            <span key={i} className={techStack}>
              {item}
            </span>
          ))}
        </div>
        <button className={button} onClick={ToPetderBetter}>
          Github
        </button>
      </motion.div>
      <motion.div className={box} whileHover={boxHover}>
        <img className={image} src={Bill_Tracker} alt='Bill Tracker' />
        <h2>Bill Tracker</h2>
        <p>Bill Splitting and Tracking Web Application</p>
        <div className='flex gap-2 text-lg'>
          {billTracker.map((item, i) => (
            <span key={i} className={techStack}>
              {item}
            </span>
          ))}
        </div>
        <button className={button} onClick={ToBillTracker}>
          Github
        </button>
      </motion.div>
    </motion.div>
  );
}

export default SideProject;
