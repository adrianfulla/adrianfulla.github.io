import './About.scss'
import duck from '@assets/duck.gif'
import student from '@assets/student.png'
import QA from '@assets/qa.png'
import fullstack from '@assets/fullstack.png'
import brain from '@assets/brain.png'
import lightbulb from '@assets/lightbulb.png'
import AboutCard from '../AboutCard/AboutCard.jsx'


function About() {
  return (
    <div className='about'>
      <div className='home'>
        <div className='title'> 
            <h1> Computer Science Student </h1>
            <h2> The brain behind the code </h2>
        </div>
        <div className='animation'>
            <div className='bulbs'> 
                <img className='lightbulb' src={lightbulb} alt='note' />
                <img className='lightbulb' src={lightbulb} alt='note' />
            </div>
            <img className='brain' src={brain} alt='me' />
            <br/> <br/> <br/>
        </div>
    </div>
      <div className='box'>
        <div className='boxCircle' />
          <div className='boxOverlay'>
            <div className='text'> 
            <h1> <img src={duck} alt="patito" style={{width:'25px'}}/> HI, I'm Adrian! </h1>
              <p> 
              Currently I am a Computer Science student at Universidad del Valle de Guatemala. 
              I am very passionate about technology and the potential it has to impact the world
              at a big scale. I consider that mygreatest skills are found in data analysis and 
              development of efficient systems.
              </p>
            </div>
          </div>
      </div>
      <div className='features'> 
            <AboutCard title="Student" image={student} description="I am currently coursing my 7th semester of Computer Science at Universidad del Valle de Guatemala." />
            <AboutCard title="Quality Assurance" image={QA} description="I have worked on QA for a software development project at school and have found that I enjoy it and excel at it." />
            <AboutCard title="Full Stack Dev" image={fullstack} description="I develop programs and systems using the best coding practices combining backend and frontend." />
          </div>
    </div>
  )
}

export default About
