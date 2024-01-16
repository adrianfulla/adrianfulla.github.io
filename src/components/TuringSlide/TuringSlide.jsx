import PropTypes from 'prop-types'
import './TuringSlide.scss'

function TuringSlide({value, isFocused}) {
    return (
      <div className={`turing-slide ${isFocused ? 'focused' : ''}`}>
        <div className='turing-slide-inner'>
          <div className='turing-slide-value'>{value}</div>
        </div>
      </div>
    )
}

TuringSlide.propTypes = {
  value: PropTypes.number,
  isFocused: PropTypes.bool,
}

TuringSlide.defaultProps = {
  value: "0",
  isFocused: false,
}

export default TuringSlide