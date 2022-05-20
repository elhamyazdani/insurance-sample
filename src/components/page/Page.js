import Dashboard from './dashboard/Dashboard'
import Header from './header/Header'
import Content from './content/Content'
import '../../assets/scss/page/Page.scss'
import { slide as Menu } from 'react-burger-menu'
import useResponsive from '../../hooks/useResponsive'

export default function Page () {
  const { isMobile, isTablet } = useResponsive()

  return (
    <div className='page'>
      <div className='main-container'>
        {isMobile || isTablet ? (
          <Menu right>
            <Dashboard />
          </Menu>
        ) : (
          <Dashboard />
        )}
        <Header />
        <Content />
      </div>
    </div>
  )
}
