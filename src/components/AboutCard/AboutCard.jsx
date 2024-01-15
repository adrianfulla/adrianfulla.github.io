
import PropTypes from 'prop-types'
import './AboutCard.scss'
import student from '@assets/student.png'

function AboutCard({title, image, description }) {
  return (
    <div className='feature'> 
    <div className='separator'> </div>
    <div className='circle'>
       <img src={image} alt='grad' /> 
    </div>
    <h1> {title} </h1>
    <p> 
        {description}
    </p>
  </div>
  )
}

AboutCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.node,
  description: PropTypes.string,
}

AboutCard.defaultProps = {
  title: "Student",
  image: {student},
  description: "I am currently coursing my 7th semester of Computer Science at Universidad del Valle de Guatemala.",
}

export default AboutCard
