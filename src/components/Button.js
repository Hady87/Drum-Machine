import PropTypes from 'prop-types'

const Button = ({ slectBtn,Key,keyTrigger,clip }) => {
  
  return (
    <button
     
      className='btn btn-secondary'
    >
      {Key}
       <audio
          className='clip'
          id={keyTrigger}
          src={clip}
        />
      
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
