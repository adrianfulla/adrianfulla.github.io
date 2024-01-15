import './MainPage.scss'
import Languages from '@components/Languages.js'
import Proyects from '@components/Proyects.js'
import NavBar from '@components/NavBar/NavBar.jsx'
import About from '@components/About/About.jsx'
import LangCard from '@components/LangCard/LangCard.jsx'
import ProjCard from '@components/ProjCard/ProjCard.jsx'
import Contact from '@components/Contact/Contact.jsx'

function MainPage() {
  const AMAClickHandler = () => {
    window.open("https://github.com/adrianfulla/adrianfulla/issues/1", '_blank')
  }
  return (
    <>
     <header><NavBar/>
     <button className="AMAButton" type="button" onClick={AMAClickHandler}>Ask me anything!</button>
     </header>
     <section>
      <div id="about"><About/></div>
      <br/><br/>
      <div id="languages">
        <div className='h1Wrapper'>
          <h1>Languages</h1>
        </div>
        <p>
            These are some of the programing languages I develop with
        </p>
        <div className='LangCardWrapper'>
          {Languages.map((language) => (
            <LangCard key={language.type} title={language.title} image={language.image} link={language.link}  />
          )
          )}
        </div>
      </div>
        <div id="proyects">
          <div className='h1Wrapper'>
            <h1>Projects</h1>
          </div>
          <p>These are a couple of projects I have worked on and I'm proud of</p>
          <div className='ProjCardWrapper'>
            {Proyects.map((proyect) => (
              <ProjCard title={proyect.title} image={proyect.image} link={proyect.link} description={proyect.description} />
            ))}
          
          </div>
        </div>
     </section>
     
      <footer>
        <div id="contact">
          <Contact/>
        </div> 
      </footer>
    </>
  )
}

export default MainPage
