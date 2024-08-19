import Home from './home/Home.jsx';
import Navbar from './navbar/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <section id='Home'>
        <Home />
      </section>
      <section
        id='About me'
        className='h-100vh flex flex-col text-6vw items-center justify-center text-center'
      >
        About me<div>...Stay tuned</div>
      </section>
      <section
        id='Project'
        className='h-100vh flex flex-col text-6vw items-center justify-center text-center'
      >
        Project<div>...Stay tuned</div>
      </section>
      <section
        id='Contact'
        className='h-100vh flex flex-col text-6vw items-center justify-center text-center'
      >
        Contact<div>...Stay tuned</div>
      </section>
    </div>
  );
}

export default App;
