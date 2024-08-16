import Logo from './Logo.jsx';
import GitHub from './GitHub.jsx';
import LinkedIn from './LinkedIn.jsx';

function Navbar() {
  // const handleGitHubClick = () => {
  //   window.open('https://github.com/KIREG19', '_blank');
  // };

  return (
    <div className='w-full flex items-center justify-around h-90px fixed top-0 bg-white z-100'>
      <Logo />
      <div className='flex gap-20px text-22px 
      text-[#ADD8E6] 
      items-center <md:hidden>'>
        <span className='cursor-pointer'>solutions.</span>
        <span className='cursor-pointer'>courses.</span>
        <span className='cursor-pointer'>resources.</span>
        <span className='cursor-pointer'>about.</span>
      </div>
      <div className='flex gap-10px items-center'>
        <GitHub />
        <LinkedIn />
      </div>
    </div>
  );
}

export default Navbar;
