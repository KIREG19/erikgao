import dust from '../assets/dust.mp4';

function Dust() {
  return (
    <video
      className='absolute h-full w-full object-cover top-0 -z-1'
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={dust} type='video/mp4' />
    </video>
  );
}

export default Dust;