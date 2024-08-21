import linkedin from '../assets/linkedin.svg';

function LinkedIn() {
  return (
    <a
      href='https://www.linkedin.com/in/erikgaogg/'
      target='_blank'
      className='cursor-pointer'
    >
      <img src={linkedin} alt='LinkedIn' />
    </a>
  );
}

export default LinkedIn;
