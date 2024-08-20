import {useRef} from 'react'
import { motion, useInView } from 'framer-motion';


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

// const title = 'flex items-center gap-50px sm:(flex-col text-center gap-20px)'
// const h1 ='text-96px font-100 sm:text-36px'
// const box = "p-50px border border-gray-200 flex flex-col justify-space sm:(border-none items-center gap-20px p-10px)"
// const button = 'p-10px bg-orange-400 border-none sm:(bg-transparent border-orange-400-1px text-orange-400 rounded-5px w-1/2 p-5px)'

const title = 'flex items-center gap-50px sm:(flex-col text-center gap-20px)'
const h1 = 'text-96px font-100 sm:text-36px'
const box = "p-50px border border-gray-200 flex flex-col justify-space sm:(border-none items-center gap-20px p-10px)"
const button = 'p-10px bg-orange-400 border-none sm:(bg-transparent border-orange-400-1px text-orange-400 rounded-5px w-1/2 p-5px)'


function Project() {
  const ref = useRef()

  const isInView = useInView(ref, {margin: '-100px'})

  return (
<motion.div
      className="h-100vh flex flex-col justify-between"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="flex text-6vh flex-col text-center items-center gap-20px sm:self-center" variants={variants}>
        <p className='font-200 text-20px text-right'>
          Project
        </p>
      </motion.div>
      <motion.div className="flex flex-2 flex-col items-center sm:w-full" variants={variants}>
        <div className={title}>
          <img className='w-300px h-100px rounded-3xl sm:(w-200px h-50px)' src="/people.webp" alt="" />
          <h1 className={h1}>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className={title}>
          <h1 className={h1}>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button className='w-300px h-100px rounded-1.5rem bg-orange-400 border-none font-24px sm:(font-16px w-150px h-50px)'>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="flex flex-2 m-auto max-w-1366px sm:(flex-col w-full)" variants={variants}>
        <motion.div
          className={box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Syncify</h2>
          <p>
            Transfer Playlist from Spotify to Youtube
          </p>
          <button className={button}>Go</button>
        </motion.div>
        <motion.div
          className={box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Job Hub</h2>
          <p>
            Job Search Tracking Web Application
          </p>
          <button className={button}>Go</button>
        </motion.div>
        <motion.div
          className={box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Petder Better</h2>
          <p>
            Pet Dating Web Application
          </p>
          <button className={button}>Go</button>
        </motion.div>
        <motion.div
          className={box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Bill Tracker</h2>
          <p>
            Bill Splitting and Tracking Web Application
          </p>
          <button className={button}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Project;
