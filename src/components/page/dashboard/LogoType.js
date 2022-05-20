import logo from '../../../assets/images/logo.png'
import '../../../assets/scss/page/dashboard/LogoType.scss'

export default function LogoType () {
  return (
    <div className='logo-type'>
      <img src={logo} alt='' />
      <span> Insurance Portal </span>
    </div>
  )
}
