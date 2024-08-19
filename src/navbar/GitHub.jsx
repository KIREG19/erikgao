import github from '../assets/github.svg';

function GitHub() {
  return (
    <a
      href='https://github.com/KIREG19'
      target='_blank'
      className='cursor-pointer'
    >
      <img src={github} height='40' width='40' alt='GitHub' />
    </a>
  );
}

export default GitHub;
