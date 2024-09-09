import stars from '../assets/stars.mp4';

function Stars() {
  return (
    <video
      className='absolute h-full w-full object-cover top-0 -z-1'
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={stars} type='video/mp4' />
    </video>
  );
}

export default Stars;