import overview from '../../../assets/images/menu/overview.svg'
import overviewHover from '../../../assets/images/menu/overview-hover.svg'
import policy from '../../../assets/images/menu/policy.svg'
import policyHover from '../../../assets/images/menu/policy-hover.svg'
import report from '../../../assets/images/menu/report.svg'
import reportHover from '../../../assets/images/menu/report-hover.svg'
import company from '../../../assets/images/menu/company.svg'
import companyHover from '../../../assets/images/menu/company-hover.svg'
import user from '../../../assets/images/menu/user.svg'
import userHover from '../../../assets/images/menu/user-hover.svg'
import history from '../../../assets/images/menu/history.svg'
import historyHover from '../../../assets/images/menu/history-hover.svg'
import MenuItem from './MenuItem'
import '../../../assets/scss/page/dashboard/MainMenu.scss'

export default function MainMenu () {
  return (
    <div className='main-menu'>
      <ul>
        <MenuItem
          title={'Overview'}
          image={overview}
          hoverImage={overviewHover}
        />
        <MenuItem title={'Policy'} image={policy} hoverImage={policyHover} />
        <MenuItem
          title={'Reports'}
          image={report}
          hoverImage={reportHover}
          active
        />
        <MenuItem title={'Company'} image={company} hoverImage={companyHover} />
        <MenuItem title={'User Account'} image={user} hoverImage={userHover} />
        <MenuItem title={'History'} image={history} hoverImage={historyHover} />
      </ul>
    </div>
  )
}
