import meteor from '../assets/meteor.mp4';

function Meteor() {
  return (
    <video
      className='absolute h-full w-full object-cover top-0 -z-1'
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={meteor} type='video/mp4' />
    </video>
  );
}

export default Meteor;