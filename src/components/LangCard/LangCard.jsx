
import PropTypes from 'prop-types'
import './LangCard.scss'

function LangCard({title, image, link }) {
  return (
    <div className='langCard'>
      <div className='container'>
        <a href={link} target='blank'><img src={image} alt={title} /></a>
      </div>
        
    </div>
  )
}

LangCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
}

LangCard.defaultProps = {
  title: "Java",
  image: "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
  link: "https://www.java.com/es/",
}

export default LangCard
