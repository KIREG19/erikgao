import GitHub from '../navbar/GitHub';
import LinkedIn from '../navbar/LinkedIn';
import Stars from './Stars';

function Contact() {
  return (
    <div className='relative h-100vh flex flex-col text-6vw items-center justify-center'>
      <Stars />
      Contact
      <div className='m-12'>
        <div className='flex my-6'>
          <LinkedIn />
          <a
            href='https://www.linkedin.com/in/erikgaogg/'
            target='_blank'
            className='cursor-pointer text-50px mx-6'
          >
            linkedin.com/in/erikgaogg
          </a>
        </div>
        <div className='flex my-6'>
          <GitHub />
          <a
            href='https://github.com/KIREG19'
            target='_blank'
            className='cursor-pointer text-50px mx-6'
          >
            github.com/KIREG19
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
