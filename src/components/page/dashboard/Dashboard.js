import '../../../assets/scss/page/dashboard/Dashboard.scss'
import Intro from './Intro'
import LogoType from './LogoType'
import MainMenu from './MainMenu'

export default function Dashboard () {
  return (
    <div className='dashboard'>
      <LogoType />
      <Intro />
      <MainMenu />
    </div>
  )
}
