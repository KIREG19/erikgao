import Logo from './Logo.jsx';
import GitHub from './GitHub.jsx';
import LinkedIn from './LinkedIn.jsx';
import { motion } from 'framer-motion';

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };
// const itemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//   },
// };

function Navbar() {
  const links = ['Home', 'About me', 'Project', 'Contact'];

  return (
    <div className='w-full flex items-center justify-around h-90px fixed top-0 z-100'>
      <Logo />
      <motion.div
        className='flex gap-20px text-28px items-center <md:hidden'
        // variants={variants}
      >
        {links.map((item) => (
          <motion.a
            href={`#${item}`}
            key={item}
            // variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {`${item}.`}
          </motion.a>
        ))}
      </motion.div>
      <div className='flex gap-25px items-center'>
        <LinkedIn />
        <GitHub />
      </div>
    </div>
  );
}

export default Navbar;
