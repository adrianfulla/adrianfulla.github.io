import PropTypes from 'prop-types'
import './ProjCard.scss'

function ProjCard({title, image, link, description }) {
  return (
    <div className='card'> 
      <img src={image} alt={title}/> 
      <p>{description}</p>
      <a href={link} target='blank'> <button type='button'> Visitar </button> </a>
    </div>
  )
}

ProjCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
}

ProjCard.defaultProps = {
  title: "Java",
  image: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
  link: "https://www.java.com/es/",
  description: "Java es un lenguaje de programación muy importante para el mundo",
}
export default ProjCard
