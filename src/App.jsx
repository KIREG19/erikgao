import Home from './home/Home.jsx';
import Navbar from './navbar/Navbar.jsx';
import Project from './project/Project.jsx';
import AboutMe from './about_me/AboutMe.jsx';
import Contact from './contact/Contact.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <section id='Home'>
        <Home />
      </section>
      <section id='About me'>
        <AboutMe />
      </section>
      <section id='Project'>
        <Project />
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
