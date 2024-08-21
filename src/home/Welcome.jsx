/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const defaultAnimations = {
  hidden: {
    y: -500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

const AnimatedText = ({ text }) => {
  return (
    <p>
      <span className='sr-only'>{text}</span>
      <motion.span
        initial='hidden'
        animate='visible'
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.map((line, lineIndex) => (
          <span key={lineIndex} className='block'>
            {line.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className='inline-block'>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className='inline-block'
                    variants={defaultAnimations}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className='inline-block'>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </p>
  );
};

function Welcome() {
  return (
    <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-99'>
      <div className='flex flex-col text-6vw text-left <md:(text-36px font-bold mb-30px)'>
        <AnimatedText
          text={[
            'Hi, I am Erik!',
            'A Software Engineer.',
            'Welcome to my Website.',
          ]}
        />
      </div>
    </div>
  );
}

export default Welcome;

// import {ReactTyped} from 'react-typed';

// function Welcome() {
//   return (
//     <div className='absolute inset-0 flex flex-col items-center justify-center text-center z-100'>
//       <div className='flex flex-col text-6vw text-left <md:text-24px font-bold mb-30px>'>
//       <ReactTyped
//           strings={[
//             '<p>Hi, I am Erik!</p>',
//             '<p>A Software Engineer</p>',
//             '<p>Welcome to my Website</p>',
//           ]}
//           typeSpeed={150}
//           showCursor={false}
//           loop={false}
//         />
//       </div>
//     </div>
//   );
// }

// export default Welcome;
