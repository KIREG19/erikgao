import Introduce from './Introduce';
import Skills from './Skills';

function AboutMe() {
  return (
    <div className='h-100% flex flex-col items-center justify-center'>
      <div className='max-w-900px text-3vw'>
        <div className='mt-100px mb-50px'>About Me</div>
        <Introduce />
        <div className='my-10'>Skills:</div>
        <Skills />
      </div>
    </div>
  );
}

export default AboutMe;
