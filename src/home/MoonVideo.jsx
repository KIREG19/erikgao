import moon from '../assets/moon.mp4';

function MoonVideo() {
  return (
    <video className='h-full w-full object-cover top-0 z-98' autoPlay muted loop playsInline>
      <source src={moon} type ='video/mp4'/>
    </video>
  );
}

export default MoonVideo;
