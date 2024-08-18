import Logo from './Logo.jsx';
import GitHub from './GitHub.jsx';
import LinkedIn from './LinkedIn.jsx';

function Navbar() {
  return (
    <div className='w-full flex items-center justify-around h-90px fixed top-0 z-100'>
      <Logo />
      <div className='flex gap-20px text-22px items-center <md:hidden>'>
        <span className='cursor-pointer'>xxxxxx.</span>
        <span className='cursor-pointer'>xxxxxx.</span>
        <span className='cursor-pointer'>Projects.</span>
        <span className='cursor-pointer'>About me.</span>
      </div>
      <div className='flex gap-25px items-center'>
        <LinkedIn />
        <GitHub />
      </div>
    </div>
  );
}

export default Navbar;
