import PropTypes from 'prop-types'
import './TuringSlider.scss'

function TuringSlider() {
    

    return (
      <div className='turing-slider'>

      </div>
    )
}

TuringSlider.propTypes = {
  value: PropTypes.number,
  isFocused: PropTypes.bool,
}

TuringSlider.defaultProps = {
  value: "0",
  isFocused: false,
}

export default TuringSlider