import '../../../assets/scss/page/header/Header.scss'
import LogoType from '../dashboard/LogoType'
import HeaderMenu from './HeaderMenu'

export default function Header () {
  return (
    <div className='header'>
      <LogoType />
      <HeaderMenu />
    </div>
  )
}
