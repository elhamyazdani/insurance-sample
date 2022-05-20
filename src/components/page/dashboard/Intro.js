import '../../../assets/scss/page/dashboard/Intro.scss'
import Button from '../../generic/Button'

export default function Intro () {
  return (
    <div className='intro'>
      <div className='image-wrapper'>
        <div className='image'></div>
      </div>
      <div className='name'>
        Hello! <span>Rusalba Ruiz</span>
      </div>
      <div className='welcome'>Welcome Back To Your Insurance Portal</div>
      <div className='plan'>
        Your Plan : <span>Free</span>
      </div>
      <div className='plan-cta'>
        <Button>
          Create New Plan
          <span>+</span>
        </Button>
      </div>
    </div>
  )
}
