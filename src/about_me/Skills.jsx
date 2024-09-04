function Skills() {
  const skills = [
    'TypeScript/JavaScript',
    'React/Redux',
    'Node.js/Express',
    'SQL/NoSQL',
    'AWS DynamoDB/Cloudwatch/Bedrock',

    'HTML/CSS/Sass/SCSS',
    'Git/Github',
    'Jest/Supertest/RTL',
    'OAuth 2.0',
    'MUI',
    'Tailwind CSS',
    'Docker',
    'Microsoft Azure SQL',
  ];

  const skillsStack = 'bg-gray-300 text-black rounded-md p-1';

  return (
    <div className='flex items-center justify-center text-center'>
      <div className='max-w-600px grid grid-cols-3 gap-10 items-center text-lg'>
        {skills.map((item, i) => (
          <span key={i} className={skillsStack}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
