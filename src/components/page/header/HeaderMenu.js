import '../../../assets/scss/page/header/HeaderMenu.scss'

export default function HeaderMenu () {
  return (
    <div className='header-menu'>
      <ul>
        <li>
          <a href='/'>Overview</a>
        </li>
        <li>
          <a href='/'>Policy</a>
        </li>
        <li className='active'>
          <a href='/'>Reports</a>
        </li>
      </ul>
    </div>
  )
}
